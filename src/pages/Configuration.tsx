import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Plus, Save, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function Configuration() {
  const [brandKeywords, setBrandKeywords] = useState<string[]>([
    "Lesotho Post Bank",
    "LPB",
    "PostBank Lesotho",
  ]);
  const [competitorKeywords, setCompetitorKeywords] = useState<string[]>([
    "Standard Lesotho Bank",
    "Nedbank Lesotho",
    "First National Bank",
  ]);
  const [industryKeywords, setIndustryKeywords] = useState<string[]>([
    "banking",
    "financial services",
    "fintech",
    "mobile money",
  ]);

  const [brandInput, setBrandInput] = useState("");
  const [competitorInput, setCompetitorInput] = useState("");
  const [industryInput, setIndustryInput] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const addKeyword = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    inputSetter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (value.trim()) {
      setter((prev) => [...prev, value.trim()]);
      inputSetter("");
    }
  };

  const removeKeyword = (
    index: number,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    // Here you would save to your backend/database
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const KeywordSection = ({
    title,
    description,
    keywords,
    input,
    onInputChange,
    onAdd,
    onRemove,
    placeholder,
  }: {
    title: string;
    description: string;
    keywords: string[];
    input: string;
    onInputChange: (value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    placeholder: string;
  }) => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>

      <div className="flex gap-2">
        <Input
          placeholder={placeholder}
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onAdd();
            }
          }}
          className="flex-1"
        />
        <Button onClick={onAdd} size="icon" className="flex-shrink-0">
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="px-3 py-1.5 text-sm bg-gray-100 text-gray-900 hover:bg-gray-200"
          >
            {keyword}
            <button
              onClick={() => onRemove(index)}
              className="ml-2 hover:text-red-600 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
        {keywords.length === 0 && (
          <p className="text-sm text-gray-500 italic">
            No keywords added yet. Add your first keyword above.
          </p>
        )}
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Configuration
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Manage keywords for brand monitoring, competitor tracking, and
            industry news
          </p>
        </div>

        {saveSuccess && (
          <Alert className="bg-green-50 border-green-200">
            <AlertCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Configuration saved successfully!
            </AlertDescription>
          </Alert>
        )}

        {/* Main Configuration Card */}
        <Card className="p-4 sm:p-6">
          <Tabs defaultValue="brand" className="space-y-4 sm:space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
              <TabsTrigger value="brand" className="text-xs sm:text-sm">
                Brand Keywords
              </TabsTrigger>
              <TabsTrigger value="competitors" className="text-xs sm:text-sm">
                Competitors
              </TabsTrigger>
              <TabsTrigger value="industry" className="text-xs sm:text-sm">
                Industry News
              </TabsTrigger>
            </TabsList>

            <TabsContent value="brand" className="space-y-6">
              <KeywordSection
                title="Brand Keywords"
                description="Add keywords related to your brand name, products, and services. These will be monitored across all sources."
                keywords={brandKeywords}
                input={brandInput}
                onInputChange={setBrandInput}
                onAdd={() =>
                  addKeyword(brandInput, setBrandKeywords, setBrandInput)
                }
                onRemove={(index) => removeKeyword(index, setBrandKeywords)}
                placeholder="e.g., Lesotho Post Bank, LPB"
              />
            </TabsContent>

            <TabsContent value="competitors" className="space-y-6">
              <KeywordSection
                title="Competitor Keywords"
                description="Track mentions of your competitors to stay informed about their activities and market positioning."
                keywords={competitorKeywords}
                input={competitorInput}
                onInputChange={setCompetitorInput}
                onAdd={() =>
                  addKeyword(
                    competitorInput,
                    setCompetitorKeywords,
                    setCompetitorInput
                  )
                }
                onRemove={(index) =>
                  removeKeyword(index, setCompetitorKeywords)
                }
                placeholder="e.g., Standard Lesotho Bank"
              />
            </TabsContent>

            <TabsContent value="industry" className="space-y-6">
              <KeywordSection
                title="Industry News Keywords"
                description="Monitor industry trends, news, and topics relevant to your business sector."
                keywords={industryKeywords}
                input={industryInput}
                onInputChange={setIndustryInput}
                onAdd={() =>
                  addKeyword(
                    industryInput,
                    setIndustryKeywords,
                    setIndustryInput
                  )
                }
                onRemove={(index) => removeKeyword(index, setIndustryKeywords)}
                placeholder="e.g., fintech, mobile banking"
              />
            </TabsContent>
          </Tabs>

          {/* Save Button */}
          <div className="flex justify-end pt-4 sm:pt-6 border-t border-gray-200 mt-4 sm:mt-6">
            <Button onClick={handleSave} className="gap-2 w-full sm:w-auto">
              <Save className="w-4 h-4" />
              Save Configuration
            </Button>
          </div>
        </Card>

        {/* Information Card */}
        <Card className="p-4 sm:p-6 bg-blue-50 border-blue-200">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="text-sm sm:text-base font-semibold text-blue-900">
                How Keywords Work
              </h3>
              <ul className="text-xs sm:text-sm text-blue-800 space-y-1 list-disc list-inside">
                <li>
                  Keywords are case-insensitive and will match partial words
                </li>
                <li>Brand keywords appear in the main dashboard and alerts</li>
                <li>
                  Competitor keywords are tracked separately for competitive
                  analysis
                </li>
                <li>
                  Industry keywords help you stay updated on market trends
                </li>
                <li>Changes take effect immediately after saving</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
