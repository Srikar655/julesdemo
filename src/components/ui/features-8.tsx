import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Zap, Cloud, Code, MessageSquare } from 'lucide-react'

export function Features() {
    const features = [
        {
            title: "Agile Methodology",
            description: "Flexible, iterative development for faster time-to-market.",
            icon: <Zap size={24} />
        },
        {
            title: "Cutting-Edge Technology",
            description: "Latest frameworks and tools for future-proof solutions.",
            icon: <Code size={24} />
        },
        {
            title: "Transparent Communication",
            description: "Regular updates and clear project visibility.",
            icon: <MessageSquare size={24} />
        },
        {
            title: "Scalable Architecture",
            description: "Build once, scale infinitely.",
            icon: <Cloud size={24} />
        },
        {
            title: "Security First",
            description: "Enterprise-grade security in every line of code.",
            icon: <Shield size={24} />
        },
        {
            title: "Post-Launch Support",
            description: "24/7 technical support and maintenance.",
            icon: <Users size={24} />
        }
    ];

    return (
        <section className="bg-black text-white py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Why Leading Companies Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-gray-900 border-gray-800 p-6 rounded-lg">
                            <CardContent className="flex flex-col items-center text-center">
                                <div className="mb-4 text-blue-500">{feature.icon}</div>
                                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}