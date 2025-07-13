import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Globe,
  TrendingUp,
  Users,
  Database,
  Settings,
  CheckCircle,
  AlertTriangle,
  Target,
  BarChart3,
  MapPin,
  Clock,
  Zap,
} from "lucide-react"

export default function RiskPlatformBlueprint() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Shield className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Ford Bank Risk Platform</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Business Blueprint for European Credit Decision Management System
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              UK Live
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Germany Next
            </Badge>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              EU Expansion
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="expansion">Expansion</TabsTrigger>
            <TabsTrigger value="governance">Governance</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Executive Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Executive Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Ford Bank's Risk Product platform represents a strategic transformation in credit decision management,
                  moving from legacy systems to a modern, flexible architecture that supports rapid expansion across
                  European markets while maintaining robust risk controls and regulatory compliance.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Current State</h4>
                    <p className="text-sm text-blue-700">UK platform live with new decision engine</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Next Phase</h4>
                    <p className="text-sm text-green-700">Germany rollout with localized features</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Future Vision</h4>
                    <p className="text-sm text-purple-700">Pan-European platform with unified risk management</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Objectives */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Strategic Business Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Primary Objectives</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Enhance decision speed and accuracy for credit applications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Enable rapid market expansion across Europe</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Improve operational efficiency and reduce manual processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Strengthen risk management and regulatory compliance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Success Metrics</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Decision Time Reduction</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Market Expansion Speed</span>
                          <span>60%</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Operational Efficiency</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Platform Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Platform Status & Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 bg-green-50 border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <h4 className="font-semibold text-green-900">United Kingdom</h4>
                    </div>
                    <Badge className="bg-green-100 text-green-800 mb-2">Live</Badge>
                    <p className="text-sm text-green-700">
                      Full platform deployment with new decision engine operational
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <h4 className="font-semibold text-blue-900">Germany</h4>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 mb-2">In Progress</Badge>
                    <p className="text-sm text-blue-700">Platform adaptation and localization underway</p>
                  </div>
                  <div className="border rounded-lg p-4 bg-gray-50 border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-gray-600" />
                      <h4 className="font-semibold text-gray-900">Other EU Markets</h4>
                    </div>
                    <Badge className="bg-gray-100 text-gray-800 mb-2">Planned</Badge>
                    <p className="text-sm text-gray-700">Future expansion phases based on Germany success</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6">
            {/* Platform Architecture */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Platform Architecture Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Core Components</h4>
                    <div className="space-y-3">
                      <div className="border rounded-lg p-3 bg-blue-50 border-blue-200">
                        <h5 className="font-medium text-blue-900 mb-1">Decision Engine</h5>
                        <p className="text-sm text-blue-700">Advanced AI-powered credit decision algorithms</p>
                      </div>
                      <div className="border rounded-lg p-3 bg-green-50 border-green-200">
                        <h5 className="font-medium text-green-900 mb-1">Data Integration Layer</h5>
                        <p className="text-sm text-green-700">Real-time data aggregation from multiple sources</p>
                      </div>
                      <div className="border rounded-lg p-3 bg-purple-50 border-purple-200">
                        <h5 className="font-medium text-purple-900 mb-1">Risk Management Module</h5>
                        <p className="text-sm text-purple-700">Comprehensive risk assessment and monitoring</p>
                      </div>
                      <div className="border rounded-lg p-3 bg-orange-50 border-orange-200">
                        <h5 className="font-medium text-orange-900 mb-1">Compliance Framework</h5>
                        <p className="text-sm text-orange-700">Automated regulatory compliance checking</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Technical Capabilities</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Real-time decision processing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Enterprise-grade security</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">Multi-market configuration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BarChart3 className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">Advanced analytics and reporting</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Settings className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Configurable business rules</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Integration Ecosystem */}
            <Card>
              <CardHeader>
                <CardTitle>Integration Ecosystem</CardTitle>
                <CardDescription>Key systems and data sources integrated with the Risk platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg bg-blue-50 border-blue-200">
                    <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h5 className="font-medium text-blue-900">Credit Bureaus</h5>
                    <p className="text-xs text-blue-700 mt-1">Experian, Equifax, SCHUFA</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-green-50 border-green-200">
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h5 className="font-medium text-green-900">CRM Systems</h5>
                    <p className="text-xs text-green-700 mt-1">Customer data integration</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-purple-50 border-purple-200">
                    <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h5 className="font-medium text-purple-900">Analytics Platform</h5>
                    <p className="text-xs text-purple-700 mt-1">Business intelligence</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-orange-50 border-orange-200">
                    <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <h5 className="font-medium text-orange-900">Fraud Detection</h5>
                    <p className="text-xs text-orange-700 mt-1">Real-time fraud screening</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="expansion" className="space-y-6">
            {/* European Expansion Strategy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  European Expansion Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3">Phase 1: Germany</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Market analysis completed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Regulatory compliance mapping</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Platform localization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">SCHUFA integration</span>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 bg-green-50 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-3">Phase 2: France & Netherlands</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Market entry planning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Local partnerships</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">Regulatory assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">Platform adaptation</span>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 bg-purple-50 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-3">Phase 3: Additional Markets</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">Italy & Spain assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">Nordic countries evaluation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">Eastern Europe opportunities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">Platform scalability review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market-Specific Considerations */}
            <Card>
              <CardHeader>
                <CardTitle>Market-Specific Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Germany</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-blue-900 mb-2">Regulatory Requirements</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• GDPR compliance enhancement</li>
                          <li>• BaFin regulatory alignment</li>
                          <li>• German consumer protection laws</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-900 mb-2">Technical Adaptations</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• SCHUFA credit bureau integration</li>
                          <li>• German language localization</li>
                          <li>• Local payment method support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="governance" className="space-y-6">
            {/* Governance Framework */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Risk Governance Framework
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Governance Structure</h4>
                    <div className="space-y-3">
                      <div className="border rounded-lg p-3 bg-red-50 border-red-200">
                        <h5 className="font-medium text-red-900">Risk Committee</h5>
                        <p className="text-sm text-red-700">Strategic oversight and policy approval</p>
                      </div>
                      <div className="border rounded-lg p-3 bg-blue-50 border-blue-200">
                        <h5 className="font-medium text-blue-900">Risk Management Team</h5>
                        <p className="text-sm text-blue-700">Day-to-day risk operations and monitoring</p>
                      </div>
                      <div className="border rounded-lg p-3 bg-green-50 border-green-200">
                        <h5 className="font-medium text-green-900">Compliance Office</h5>
                        <p className="text-sm text-green-700">Regulatory compliance and reporting</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Key Controls</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span className="text-sm">Automated decision audit trails</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span className="text-sm">Real-time risk monitoring dashboards</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span className="text-sm">Regular model validation and testing</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span className="text-sm">Compliance reporting automation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span className="text-sm">Exception handling procedures</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Compliance Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Regulation</th>
                        <th className="text-left p-2">UK</th>
                        <th className="text-left p-2">Germany</th>
                        <th className="text-left p-2">EU-Wide</th>
                        <th className="text-left p-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="p-2 font-medium">GDPR</td>
                        <td className="p-2">
                          <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                        </td>
                        <td className="p-2">
                          <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                        </td>
                        <td className="p-2">
                          <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                        </td>
                        <td className="p-2">Active</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">PCI DSS</td>
                        <td className="p-2">
                          <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                        </td>
                        <td className="p-2">
                          <Badge className="bg-yellow-100 text-yellow-800">Planned</Badge>
                        </td>
                        <td className="p-2">
                          <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                        </td>
                        <td className="p-2">Active</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Basel III</td>
                        <td className="p-2">
                          <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                        </td>
                        <td className="p-2">
                          <Badge className="bg-yellow-100 text-yellow-800">Assessment</Badge>
                        </td>
                        <td className="p-2">
                          <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                        </td>
                        <td className="p-2">Active</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roadmap" className="space-y-6">
            {/* Implementation Roadmap */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Implementation Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="border rounded-lg p-4 bg-green-50 border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">Q1 2024</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">UK platform stabilization</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Performance optimization</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Germany market analysis</span>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">Q2 2024</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">Germany platform adaptation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">SCHUFA integration</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">Regulatory compliance setup</span>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 bg-purple-50 border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-2">Q3 2024</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                          <span className="text-sm">Germany pilot launch</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                          <span className="text-sm">User acceptance testing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                          <span className="text-sm">Performance monitoring</span>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 bg-orange-50 border-orange-200">
                      <h4 className="font-semibold text-orange-900 mb-2">Q4 2024</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                          <span className="text-sm">Germany full rollout</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                          <span className="text-sm">Next market planning</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                          <span className="text-sm">Platform enhancements</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Milestones */}
            <Card>
              <CardHeader>
                <CardTitle>Key Milestones & Dependencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-900">Completed Milestones</h4>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• UK platform go-live and stabilization</li>
                      <li>• New decision engine implementation</li>
                      <li>• Initial performance benchmarking</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-900">Current Focus</h4>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• Germany market entry preparation</li>
                      <li>• Regulatory compliance framework</li>
                      <li>• Platform localization and testing</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-900">Critical Dependencies</h4>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• SCHUFA integration approval and testing</li>
                      <li>• German regulatory authority approvals</li>
                      <li>• Local partnership agreements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="metrics" className="space-y-6">
            {/* Success Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Key Performance Indicators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Operational Metrics</h4>
                    <div className="space-y-3">
                      <div className="border rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Decision Processing Time</span>
                          <span className="text-sm text-green-600">{"<"} 30 seconds</span>
                        </div>
                        <Progress value={85} className="h-2" />
                        <p className="text-xs text-gray-500 mt-1">Target: {"<"} 30 seconds | Current: 25 seconds avg</p>
                      </div>
                      <div className="border rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">System Availability</span>
                          <span className="text-sm text-green-600">99.9%</span>
                        </div>
                        <Progress value={99} className="h-2" />
                        <p className="text-xs text-gray-500 mt-1">Target: 99.9% | Current: 99.95%</p>
                      </div>
                      <div className="border rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Straight-Through Processing</span>
                          <span className="text-sm text-blue-600">78%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                        <p className="text-xs text-gray-500 mt-1">Target: 80% | Current: 78%</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Business Metrics</h4>
                    <div className="space-y-3">
                      <div className="border rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Application Approval Rate</span>
                          <span className="text-sm text-green-600">65%</span>
                        </div>
                        <Progress value={65} className="h-2" />
                        <p className="text-xs text-gray-500 mt-1">Target: 60-70% | Current: 65%</p>
                      </div>
                      <div className="border rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Default Rate</span>
                          <span className="text-sm text-green-600">2.1%</span>
                        </div>
                        <Progress value={21} className="h-2" />
                        <p className="text-xs text-gray-500 mt-1">Target: {"<"} 3% | Current: 2.1%</p>
                      </div>
                      <div className="border rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Customer Satisfaction</span>
                          <span className="text-sm text-green-600">4.2/5</span>
                        </div>
                        <Progress value={84} className="h-2" />
                        <p className="text-xs text-gray-500 mt-1">Target: {">"} 4.0 | Current: 4.2/5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Risk Management Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg bg-green-50 border-green-200">
                    <div className="text-2xl font-bold text-green-600 mb-1">2.1%</div>
                    <div className="text-sm font-medium text-green-900">Default Rate</div>
                    <div className="text-xs text-green-700 mt-1">Below target threshold</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-blue-50 border-blue-200">
                    <div className="text-2xl font-bold text-blue-600 mb-1">0.3%</div>
                    <div className="text-sm font-medium text-blue-900">Fraud Rate</div>
                    <div className="text-xs text-blue-700 mt-1">Within acceptable limits</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-purple-50 border-purple-200">
                    <div className="text-2xl font-bold text-purple-600 mb-1">15.2%</div>
                    <div className="text-sm font-medium text-purple-900">Portfolio Yield</div>
                    <div className="text-xs text-purple-700 mt-1">Above target performance</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
