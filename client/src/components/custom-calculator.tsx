import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calculator, Info } from 'lucide-react';
import { formatCurrency, scrollToSection } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { ProjectCalculation, WoodTypeOption, ProjectTypeOption, FinishTypeOption } from '@/types';

const projectTypes: ProjectTypeOption[] = [
  { value: 'furniture', label: 'Furniture (Table, Chair, Bed)', multiplier: 1.5 },
  { value: 'cabinet', label: 'Cabinets & Storage', multiplier: 1.8 },
  { value: 'decor', label: 'Home Decor Items', multiplier: 1.2 },
  { value: 'carving', label: 'Detailed Wood Carving', multiplier: 2.5 },
];

const woodTypes: WoodTypeOption[] = [
  { value: 'teak', label: 'Teak', price: 1500 },
  { value: 'rosewood', label: 'Rosewood', price: 2000 },
  { value: 'mahogany', label: 'Mahogany', price: 1200 },
  { value: 'oak', label: 'Oak', price: 1000 },
  { value: 'pine', label: 'Pine', price: 600 },
];

const finishTypes: FinishTypeOption[] = [
  { value: 'basic', label: 'Basic Polish', cost: 500 },
  { value: 'premium', label: 'Premium Lacquer', cost: 1000 },
  { value: 'antique', label: 'Antique Finish', cost: 1500 },
  { value: 'natural', label: 'Natural Oil Finish', cost: 800 },
];

export function CustomCalculator() {
  const [calculation, setCalculation] = useState<Partial<ProjectCalculation>>({});
  const [estimate, setEstimate] = useState<ProjectCalculation | null>(null);
  const { toast } = useToast();

  const handleCalculate = () => {
    const { projectType, woodType, length, width, finishType } = calculation;

    if (!projectType || !woodType || !length || !width || !finishType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const woodTypeData = woodTypes.find(w => w.value === woodType)!;
    const projectTypeData = projectTypes.find(p => p.value === projectType)!;
    const finishTypeData = finishTypes.find(f => f.value === finishType)!;

    const area = length * width;
    const materialCost = area * woodTypeData.price;
    const laborCost = materialCost * projectTypeData.multiplier;
    const finishCost = finishTypeData.cost;
    const totalEstimate = materialCost + laborCost + finishCost;

    const newEstimate: ProjectCalculation = {
      ...calculation as ProjectCalculation,
      materialCost,
      laborCost,
      finishCost,
      totalEstimate,
    };

    setEstimate(newEstimate);
  };

  const handleRequestQuote = async () => {
    if (estimate) {
      try {
        // Save quote to backend
        const response = await fetch('/api/custom-quotes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            projectType: estimate.projectType,
            woodType: estimate.woodType,
            length: estimate.length.toString(),
            width: estimate.width.toString(),
            finishType: estimate.finishType,
            description: estimate.description || '',
            materialCost: estimate.materialCost.toString(),
            laborCost: estimate.laborCost.toString(),
            finishCost: estimate.finishCost.toString(),
            totalEstimate: estimate.totalEstimate.toString(),
          })
        });

        if (response.ok) {
          localStorage.setItem('quote-request', JSON.stringify(estimate));
          scrollToSection('contact');
          toast({
            title: "Quote Request Saved",
            description: "Please fill out the contact form to complete your quote request.",
          });
        } else {
          throw new Error('Failed to save quote');
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to save quote. Please try the contact form instead.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section id="custom" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-wood-dark mb-4">
            Custom Order Calculator
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get an instant estimate for your custom woodwork project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <Card className="bg-cream shadow-lg">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-wood-dark">
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="project-type" className="text-sm font-semibold text-wood-dark">
                    Project Type
                  </Label>
                  <Select
                    value={calculation.projectType}
                    onValueChange={(value) => setCalculation(prev => ({ ...prev, projectType: value }))}
                  >
                    <SelectTrigger data-testid="project-type-select">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="wood-type" className="text-sm font-semibold text-wood-dark">
                    Wood Type
                  </Label>
                  <Select
                    value={calculation.woodType}
                    onValueChange={(value) => setCalculation(prev => ({ ...prev, woodType: value }))}
                  >
                    <SelectTrigger data-testid="wood-type-select">
                      <SelectValue placeholder="Select wood type" />
                    </SelectTrigger>
                    <SelectContent>
                      {woodTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label} (₹{type.price}/sq ft)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="length" className="text-sm font-semibold text-wood-dark">
                      Length (feet)
                    </Label>
                    <Input
                      id="length"
                      type="number"
                      min="1"
                      step="0.1"
                      value={calculation.length || ''}
                      onChange={(e) => setCalculation(prev => ({ 
                        ...prev, 
                        length: parseFloat(e.target.value) || 0 
                      }))}
                      data-testid="length-input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="width" className="text-sm font-semibold text-wood-dark">
                      Width (feet)
                    </Label>
                    <Input
                      id="width"
                      type="number"
                      min="1"
                      step="0.1"
                      value={calculation.width || ''}
                      onChange={(e) => setCalculation(prev => ({ 
                        ...prev, 
                        width: parseFloat(e.target.value) || 0 
                      }))}
                      data-testid="width-input"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="finish-type" className="text-sm font-semibold text-wood-dark">
                    Finish Type
                  </Label>
                  <Select
                    value={calculation.finishType}
                    onValueChange={(value) => setCalculation(prev => ({ ...prev, finishType: value }))}
                  >
                    <SelectTrigger data-testid="finish-type-select">
                      <SelectValue placeholder="Select finish type" />
                    </SelectTrigger>
                    <SelectContent>
                      {finishTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label} (₹{type.cost})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description" className="text-sm font-semibold text-wood-dark">
                    Project Description
                  </Label>
                  <Textarea
                    id="description"
                    rows={3}
                    placeholder="Describe your project requirements..."
                    value={calculation.description || ''}
                    onChange={(e) => setCalculation(prev => ({ 
                      ...prev, 
                      description: e.target.value 
                    }))}
                    data-testid="description-textarea"
                  />
                </div>

                <Button
                  onClick={handleCalculate}
                  className="w-full bg-walnut text-white hover:bg-walnut-light"
                  data-testid="calculate-estimate-btn"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Estimate
                </Button>
              </CardContent>
            </Card>

            {/* Estimate Display */}
            <Card className="bg-gradient-to-br from-walnut to-teak text-white shadow-lg">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Project Estimate</CardTitle>
              </CardHeader>
              <CardContent>
                {estimate ? (
                  <div data-testid="estimate-result">
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span>Material Cost:</span>
                        <span data-testid="material-cost">
                          {formatCurrency(estimate.materialCost)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Labor & Craftsmanship:</span>
                        <span data-testid="labor-cost">
                          {formatCurrency(estimate.laborCost)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Finish Cost:</span>
                        <span data-testid="finish-cost">
                          {formatCurrency(estimate.finishCost)}
                        </span>
                      </div>
                      <hr className="border-amber/30" />
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total Estimate:</span>
                        <span data-testid="total-estimate">
                          {formatCurrency(estimate.totalEstimate)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 mb-6">
                      <p className="text-sm">
                        <Info className="w-4 h-4 inline mr-2" />
                        This is an approximate estimate. Final pricing may vary based on design complexity and specific requirements.
                      </p>
                    </div>

                    <Button
                      onClick={handleRequestQuote}
                      className="w-full bg-amber text-wood-dark hover:bg-amber-light"
                      data-testid="request-quote-btn"
                    >
                      Request Detailed Quote
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12" data-testid="estimate-placeholder">
                    <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="opacity-75">Fill out the form to calculate your project estimate</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
