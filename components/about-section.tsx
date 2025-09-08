import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, Users, Lightbulb } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Enfoque en Resultados",
      description: "Nos comprometemos a entregar soluciones que generen valor real para tu negocio.",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboramos estrechamente contigo en cada etapa del proyecto.",
    },
    {
      icon: Lightbulb,
      title: "Innovación Constante",
      description: "Utilizamos las tecnologías más avanzadas y mejores prácticas del mercado.",
    },
  ]

  const achievements = [
    "Más de 100 proyectos exitosos",
    "98% de satisfacción del cliente",
    "Equipo certificado en tecnologías líderes",
    "Soporte técnico 24/7",
  ]

  return (
    <section id="nosotros" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Sobre CodeFlash
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">
              Expertos en tecnología con el objetivo de ayudar a las empresas
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              En CodeFlash, somos un equipo apasionado de desarrolladores y diseñadores que transformamos ideas
              innovadoras en soluciones digitales exitosas. Con más de 5 años de experiencia, hemos ayudado a empresas
              de todos los tamaños a alcanzar sus objetivos tecnológicos.
            </p>

            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start w-10 h-10 bg-accent/10 rounded-lg mb-3">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-accent/20 via-primary/10 to-muted flex items-center justify-center">
                  <img
                    src="/placeholder-yy09m.png"
                    alt="Equipo de CodeFlash trabajando en proyectos innovadores"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
