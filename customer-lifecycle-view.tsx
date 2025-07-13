"use client"

import React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Car,
  UserPlus,
  Shield,
  TrendingUp,
  Users,
  Phone,
  MessageSquare,
  CheckCircle,
  RefreshCw,
  ArrowRight,
  Target,
  DollarSign,
  FileText,
  Smartphone,
  Globe,
  Award,
  BarChart3,
  Settings,
  Database,
} from "lucide-react"
import { useState } from "react"

export default function CustomerLifecycleView() {
  const [selectedStage, setSelectedStage] = useState<StageId>("awareness")


  const lifecycleStages: {
    id: StageId
    name: string
    icon: React.ElementType
    color: "blue" | "purple" | "orange" | "red" | "green"
    duration: string
    description: string
  }[] = [
    {
      id: "awareness",
      name: "Awareness",
      icon: Globe,
      color: "blue",
      duration: "0-30 days",
      description: "Customer becomes aware of Ford Bank financing options",
    },
    {
      id: "consideration",
      name: "Consideration",
      icon: Target,
      color: "purple",
      duration: "1-60 days",
      description: "Customer evaluates Ford Bank against competitors",
    },
    {
      id: "application",
      name: "Application",
      icon: FileText,
      color: "orange",
      duration: "1-7 days",
      description: "Customer submits financing application",
    },
    {
      id: "decision",
      name: "Credit Decision",
      icon: Shield,
      color: "red",
      duration: "Minutes-Hours",
      description: "Risk platform processes application and makes decision",
    },
    {
      id: "onboarding",
      name: "Onboarding",
      icon: UserPlus,
      color: "green",
      duration: "1-14 days",
      description: "Customer completes account setup and documentation",
    },
    {
      id: "active",
      name: "Active Customer",
      icon: Car,
      color: "blue",
      duration: "12-84 months",
      description: "Customer manages their Ford financing account",
    },
    {
      id: "retention",
      name: "Retention & Growth",
      icon: TrendingUp,
      color: "purple",
      duration: "Ongoing",
      description: "Cross-selling and relationship deepening",
    },
    {
      id: "completion",
      name: "Loan Completion",
      icon: Award,
      color: "green",
      duration: "End of term",
      description: "Customer completes financing and potential renewal",
    },
  ]

  type StageId =
    | "awareness"
    | "consideration"
    | "application"
    | "decision"
    | "onboarding"
    | "active"
    | "retention"
    | "completion"

  const getStageData = (stageId: StageId) => {
    const stageDetails: Record<StageId, {
      touchpoints: { name: string; channel: string; frequency: string }[]
      systems: string[]
      metrics: { name: string; value: string; trend: string }[]
      keyActivities: string[]
    }> = {
      awareness: {
        touchpoints: [
          { name: "Ford Dealer Visit", channel: "Physical", frequency: "Initial" },
          { name: "Ford.com Website", channel: "Digital", frequency: "Multiple" },
          { name: "Digital Advertising", channel: "Digital", frequency: "Ongoing" },
          { name: "Social Media", channel: "Digital", frequency: "Ongoing" },
          { name: "Email Marketing", channel: "Digital", frequency: "Weekly" },
        ],
        systems: ["Marketing Automation", "Website CMS", "CRM", "Analytics Platform"],
        metrics: [
          { name: "Website Traffic", value: "125K", trend: "up" },
          { name: "Dealer Inquiries", value: "8.2K", trend: "up" },
          { name: "Brand Awareness", value: "67%", trend: "stable" },
          { name: "Cost per Lead", value: "£45", trend: "down" },
        ],
        keyActivities: [
          "Digital marketing campaigns",
          "Dealer partnership programs",
          "Content marketing",
          "SEO optimization",
          "Social media engagement",
        ],
      },
      consideration: {
        touchpoints: [
          { name: "Rate Calculator", channel: "Digital", frequency: "Multiple" },
          { name: "Dealer Consultation", channel: "Physical", frequency: "1-3 times" },
          { name: "Customer Service", channel: "Phone", frequency: "As needed" },
          { name: "Comparison Tools", channel: "Digital", frequency: "Multiple" },
          { name: "Product Brochures", channel: "Physical/Digital", frequency: "Once" },
        ],
        systems: ["Rate Calculator", "CRM", "Product Catalog", "Comparison Engine"],
        metrics: [
          { name: "Conversion Rate", value: "23%", trend: "up" },
          { name: "Time to Decision", value: "18 days", trend: "down" },
          { name: "Quote Requests", value: "15.3K", trend: "up" },
          { name: "Dealer Satisfaction", value: "4.2/5", trend: "stable" },
        ],
        keyActivities: [
          "Personalized rate quotes",
          "Product comparison tools",
          "Dealer training programs",
          "Customer education content",
          "Competitive analysis",
        ],
      },
      application: {
        touchpoints: [
          { name: "Online Application", channel: "Digital", frequency: "Once" },
          { name: "Dealer Application", channel: "Physical", frequency: "Once" },
          { name: "Mobile App", channel: "Mobile", frequency: "Once" },
          { name: "Phone Application", channel: "Phone", frequency: "Once" },
          { name: "Document Upload", channel: "Digital", frequency: "Multiple" },
        ],
        systems: ["Application Portal", "Document Management", "Identity Verification", "CRM"],
        metrics: [
          { name: "Application Completion", value: "78%", trend: "up" },
          { name: "Digital Applications", value: "65%", trend: "up" },
          { name: "Average Time", value: "12 mins", trend: "down" },
          { name: "Abandonment Rate", value: "22%", trend: "down" },
        ],
        keyActivities: [
          "Application form optimization",
          "Document collection",
          "Identity verification",
          "Preliminary eligibility check",
          "Application status updates",
        ],
      },
      decision: {
        touchpoints: [
          { name: "Risk Platform", channel: "System", frequency: "Once" },
          { name: "Credit Bureau Check", channel: "System", frequency: "Once" },
          { name: "Decision Notification", channel: "Digital/Phone", frequency: "Once" },
          { name: "Manual Review", channel: "Internal", frequency: "If needed" },
          { name: "Appeals Process", channel: "Phone", frequency: "If needed" },
        ],
        systems: ["Risk Decision Engine", "Credit Bureaus", "Fraud Detection", "Notification System"],
        metrics: [
          { name: "Decision Time", value: "25 secs", trend: "down" },
          { name: "Approval Rate", value: "65%", trend: "stable" },
          { name: "STP Rate", value: "78%", trend: "up" },
          { name: "Appeal Success", value: "15%", trend: "stable" },
        ],
        keyActivities: [
          "Automated credit scoring",
          "Risk assessment",
          "Fraud screening",
          "Decision communication",
          "Manual review process",
        ],
      },
      onboarding: {
        touchpoints: [
          { name: "Welcome Email", channel: "Digital", frequency: "Once" },
          { name: "Account Setup", channel: "Digital", frequency: "Once" },
          { name: "Document Signing", channel: "Digital", frequency: "Once" },
          { name: "Direct Debit Setup", channel: "Digital/Phone", frequency: "Once" },
          { name: "Welcome Call", channel: "Phone", frequency: "Once" },
        ],
        systems: ["Customer Portal", "Document Management", "Payment Systems", "CRM"],
        metrics: [
          { name: "Onboarding Completion", value: "92%", trend: "up" },
          { name: "Time to First Payment", value: "8 days", trend: "down" },
          { name: "Digital Adoption", value: "73%", trend: "up" },
          { name: "Customer Satisfaction", value: "4.1/5", trend: "up" },
        ],
        keyActivities: [
          "Account activation",
          "Payment method setup",
          "Digital service enrollment",
          "Welcome communication",
          "First payment processing",
        ],
      },
      active: {
        touchpoints: [
          { name: "Monthly Statements", channel: "Digital", frequency: "Monthly" },
          { name: "Payment Processing", channel: "System", frequency: "Monthly" },
          { name: "Customer Portal", channel: "Digital", frequency: "As needed" },
          { name: "Mobile App", channel: "Mobile", frequency: "Regular" },
          { name: "Customer Service", channel: "Phone/Chat", frequency: "As needed" },
        ],
        systems: ["Customer Portal", "Payment Systems", "Mobile App", "CRM", "Collections"],
        metrics: [
          { name: "Payment Performance", value: "96.5%", trend: "stable" },
          { name: "Digital Engagement", value: "68%", trend: "up" },
          { name: "Customer Satisfaction", value: "4.3/5", trend: "up" },
          { name: "Service Requests", value: "2.1/year", trend: "down" },
        ],
        keyActivities: [
          "Payment processing",
          "Account management",
          "Customer service",
          "Collections management",
          "Relationship maintenance",
        ],
      },
      retention: {
        touchpoints: [
          { name: "Loyalty Programs", channel: "Digital", frequency: "Ongoing" },
          { name: "Cross-sell Offers", channel: "Digital/Phone", frequency: "Quarterly" },
          { name: "Renewal Campaigns", channel: "Multi-channel", frequency: "Pre-maturity" },
          { name: "Customer Surveys", channel: "Digital", frequency: "Bi-annual" },
          { name: "VIP Services", channel: "Phone", frequency: "As needed" },
        ],
        systems: ["Marketing Automation", "CRM", "Analytics Platform", "Loyalty System"],
        metrics: [
          { name: "Customer Retention", value: "89%", trend: "up" },
          { name: "Cross-sell Success", value: "12%", trend: "up" },
          { name: "NPS Score", value: "42", trend: "up" },
          { name: "Lifetime Value", value: "£2,850", trend: "up" },
        ],
        keyActivities: [
          "Loyalty program management",
          "Cross-selling campaigns",
          "Customer feedback collection",
          "Retention analysis",
          "VIP customer management",
        ],
      },
      completion: {
        touchpoints: [
          { name: "Final Payment", channel: "System", frequency: "Once" },
          { name: "Completion Certificate", channel: "Digital", frequency: "Once" },
          { name: "Renewal Offer", channel: "Multi-channel", frequency: "Once" },
          { name: "Satisfaction Survey", channel: "Digital", frequency: "Once" },
          { name: "Alumni Program", channel: "Digital", frequency: "Ongoing" },
        ],
        systems: ["Payment Systems", "Document Management", "Marketing Automation", "CRM"],
        metrics: [
          { name: "Completion Rate", value: "94%", trend: "stable" },
          { name: "Renewal Rate", value: "28%", trend: "up" },
          { name: "Referral Rate", value: "15%", trend: "up" },
          { name: "Alumni Engagement", value: "35%", trend: "stable" },
        ],
        keyActivities: [
          "Final payment processing",
          "Account closure",
          "Renewal marketing",
          "Alumni program enrollment",
          "Referral program activation",
        ],
      },
    }
    return stageDetails[stageId] || stageDetails.awareness
  }

  const currentStageData = getStageData(selectedStage)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Car className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Ford Bank Customer Lifecycle</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete customer journey from awareness to loyalty across all touchpoints and systems
          </p>
        </div>

        {/* Lifecycle Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              Customer Lifecycle Stages
            </CardTitle>
            <CardDescription>Click on any stage to explore detailed touchpoints and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {lifecycleStages.map((stage, index) => {
                const Icon = stage.icon
                const isSelected = selectedStage === stage.id
                const colorClasses = {
                  blue: isSelected
                    ? "bg-blue-100 border-blue-500 text-blue-900"
                    : "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100",
                  purple: isSelected
                    ? "bg-purple-100 border-purple-500 text-purple-900"
                    : "bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100",
                  orange: isSelected
                    ? "bg-orange-100 border-orange-500 text-orange-900"
                    : "bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100",
                  red: isSelected
                    ? "bg-red-100 border-red-500 text-red-900"
                    : "bg-red-50 border-red-200 text-red-700 hover:bg-red-100",
                  green: isSelected
                    ? "bg-green-100 border-green-500 text-green-900"
                    : "bg-green-50 border-green-200 text-green-700 hover:bg-green-100",
                }

                return (
                  <div key={stage.id} className="relative">
                    <button
                      onClick={() => setSelectedStage(stage.id)}
                      className={`w-full p-4 border-2 rounded-lg transition-all cursor-pointer ${colorClasses[stage.color]}`}
                    >
                      <Icon className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-semibold text-sm mb-1">{stage.name}</h3>
                      <p className="text-xs opacity-75">{stage.duration}</p>
                    </button>
                    {index < lifecycleStages.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Selected Stage Details */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stage Overview */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {React.createElement(lifecycleStages.find((s) => s.id === selectedStage)?.icon || Globe, {
                  className: "h-5 w-5",
                })}
                {lifecycleStages.find((s) => s.id === selectedStage)?.name}
              </CardTitle>
              <CardDescription>{lifecycleStages.find((s) => s.id === selectedStage)?.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                <Badge variant="outline">{lifecycleStages.find((s) => s.id === selectedStage)?.duration}</Badge>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Activities</h4>
                <ul className="space-y-1">
                  {currentStageData.keyActivities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Touchpoints & Systems */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Touchpoints & Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="touchpoints" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="touchpoints">Touchpoints</TabsTrigger>
                  <TabsTrigger value="systems">Systems</TabsTrigger>
                  <TabsTrigger value="metrics">Metrics</TabsTrigger>
                </TabsList>

                <TabsContent value="touchpoints" className="space-y-4">
                  <div className="grid gap-3">
                    {currentStageData.touchpoints.map((touchpoint, index) => {
                      const getChannelIcon = (channel: string) => {
                        switch (channel.toLowerCase()) {
                          case "digital":
                            return Globe
                          case "physical":
                            return Users
                          case "phone":
                            return Phone
                          case "mobile":
                            return Smartphone
                          case "system":
                            return Settings
                          case "internal":
                            return Shield
                          case "multi-channel":
                            return RefreshCw
                          default:
                            return MessageSquare
                        }
                      }
                      const ChannelIcon = getChannelIcon(touchpoint.channel)

                      return (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-gray-50">
                          <div className="flex items-center gap-3">
                            <ChannelIcon className="h-4 w-4 text-gray-600" />
                            <span className="font-medium text-gray-900">{touchpoint.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {touchpoint.channel}
                            </Badge>
                            <span className="text-xs text-gray-500">{touchpoint.frequency}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="systems" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentStageData.systems.map((system, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 border rounded-lg bg-blue-50 border-blue-200"
                      >
                        <Database className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-900">{system}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="metrics" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentStageData.metrics.map((metric, index) => {
                      const getTrendIcon = (trend: string) => {
                        switch (trend) {
                          case "up":
                            return <TrendingUp className="h-4 w-4 text-green-500" />
                          case "down":
                            return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />
                          default:
                            return <div className="h-4 w-4 bg-gray-400 rounded-full" />
                        }
                      }

                      return (
                        <div key={index} className="p-4 border rounded-lg bg-white">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                            {getTrendIcon(metric.trend)}
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Customer Journey Analytics */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Journey Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Awareness to Application</span>
                    <span>15%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Application to Approval</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Onboarding Completion</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Customer Retention</span>
                    <span>89%</span>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Customer Value Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 border rounded-lg bg-green-50 border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">£2,850</div>
                  <div className="text-sm font-medium text-green-900">Avg. Customer LTV</div>
                </div>
                <div className="text-center p-4 border rounded-lg bg-blue-50 border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">£185</div>
                  <div className="text-sm font-medium text-blue-900">Acquisition Cost</div>
                </div>
                <div className="text-center p-4 border rounded-lg bg-purple-50 border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">42</div>
                  <div className="text-sm font-medium text-purple-900">NPS Score</div>
                </div>
                <div className="text-center p-4 border rounded-lg bg-orange-50 border-orange-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">48 months</div>
                  <div className="text-sm font-medium text-orange-900">Avg. Relationship</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
