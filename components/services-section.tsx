import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Cloud, Database, ShoppingCart, Palette, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas y responsivas con las últimas tecnologías como React, Next.js y Node.js.",
      features: ["React & Next.js", "Responsive Design", "SEO Optimizado"],
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "Aplicaciones móviles nativas e híbridas para iOS y Android con experiencia de usuario excepcional.",
      features: ["iOS & Android", "React Native", "UI/UX Nativo"],
    },
    {
      icon: Cloud,
      title: "Soluciones Cloud",
      description: "Arquitecturas escalables en la nube con AWS, Google Cloud y Azure para máximo rendimiento.",
      features: ["AWS & Azure", "Escalabilidad", "Alta Disponibilidad"],
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "APIs robustas y bases de datos optimizadas para soportar aplicaciones de alto tráfico.",
      features: ["REST & GraphQL", "Microservicios", "Bases de Datos"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Tiendas online completas con pasarelas de pago, gestión de inventario y analytics.",
      features: ["Shopify & WooCommerce", "Pagos Seguros", "Analytics"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Diseños intuitivos y atractivos que mejoran la experiencia del usuario y conversiones.",
      features: ["Figma & Adobe XD", "Prototipado", "User Research"],
    },
  ]

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/50"
            >
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="text-accent hover:text-accent-foreground hover:bg-accent group/btn p-0"
                >
                  Saber más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Solicitar cotización gratuita
          </Button>
        </div>
      </div>
    </section>
  )
}
