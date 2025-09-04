import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Shield, Clock, MessageCircle, BarChart3, AlertTriangle, DollarSign, Smartphone, Star } from "lucide-react";
import chatbotImage from "@/assets/chatbot-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">
              GastosBot
            </span>
          </div>
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            Teste Grátis
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-primary">
                  🚀 Controle Inteligente
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-primary">
                    Controle de Gastos
                  </span>
                  <br />
                  pelo WhatsApp
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Monitore e controle seus gastos de forma inteligente com nosso chatbot. 
                  Registre despesas, receba alertas e organize suas finanças direto no WhatsApp.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 py-6"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Começar Agora
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Ver Demonstração
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Sem instalação</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Teste grátis 7 dias</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Suporte 24/7</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={chatbotImage} 
                  alt="Chatbot de controle de gastos no WhatsApp" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Por que escolher o GastosBot?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simplifique o controle dos seus gastos com inteligência artificial e automação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Registro Automático</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  registre seus gastos enviando uma simples mensagem. O bot categoriza automaticamente suas despesas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-accent/5">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Alertas Inteligentes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Receba notificações quando ultrapassar seus limites de gastos ou quando há padrões incomuns.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Relatórios Detalhados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Análises completas dos seus gastos por categoria, período e tendências para melhor controle financeiro.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-accent/5">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Disponível 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Registre seus gastos a qualquer hora do dia, o bot está sempre disponível para te ajudar.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Dados Seguros</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Suas informações financeiras são criptografadas e protegidas com os mais altos padrões de segurança.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-accent/5">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Insights Financeiros</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Receba dicas personalizadas e insights sobre seus hábitos de gastos para melhorar sua saúde financeira.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Como Funciona</h2>
            <p className="text-xl text-muted-foreground">
              Simples como enviar uma mensagem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-2xl font-semibold">Registre o Gasto</h3>
              <p className="text-muted-foreground">
                Envie uma mensagem simples: "Gastei R$ 50 no supermercado" e o bot registra automaticamente.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-2xl font-semibold">Acompanhe em Tempo Real</h3>
              <p className="text-muted-foreground">
                Receba confirmação instantânea e veja como isso afeta seu orçamento mensal em tempo real.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-2xl font-semibold">Receba Insights</h3>
              <p className="text-muted-foreground">
                Obtenha relatórios semanais e alertas quando se aproximar dos seus limites de gastos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">O que nossos clientes dizem</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Nunca foi tão fácil controlar meus gastos. O bot é super intuitivo e me ajuda a economizar todo mês!"
                </p>
                <div className="font-semibold">Maria Silva</div>
                <div className="text-sm text-muted-foreground">Empresária</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Os relatórios são incríveis! Agora sei exatamente onde estou gastando meu dinheiro."
                </p>
                <div className="font-semibold">João Santos</div>
                <div className="text-sm text-muted-foreground">Freelancer</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Consegui reduzir meus gastos em 30% só com os insights do GastosBot. Recomendo!"
                </p>
                <div className="font-semibold">Ana Costa</div>
                <div className="text-sm text-muted-foreground">Consultora</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Planos Simples e Transparentes</h2>
            <p className="text-xl text-muted-foreground">
              Escolha o plano ideal para seu perfil
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-border">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pessoal</CardTitle>
                <div className="text-4xl font-bold mt-4">
                  R$ 19<span className="text-lg font-normal text-muted-foreground">/mês</span>
                </div>
                <CardDescription>Perfeito para controle pessoal</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Até 200 registros/mês</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Relatórios básicos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Alertas de orçamento</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Suporte por email</span>
                  </div>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Começar Teste Grátis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 text-sm font-medium">
                Mais Popular
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Profissional</CardTitle>
                <div className="text-4xl font-bold mt-4">
                  R$ 49<span className="text-lg font-normal text-muted-foreground">/mês</span>
                </div>
                <CardDescription>Para quem quer controle total</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Registros ilimitados</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Relatórios avançados</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Múltiplas categorias</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Exportação de dados</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Suporte prioritário</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Começar Teste Grátis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary-foreground">
              Pronto para ter controle total dos seus gastos?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Comece seu teste gratuito de 7 dias agora e veja como é fácil organizar suas finanças.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Iniciar no WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Agendar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <MessageCircle className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">
                GastosBot
              </span>
            </div>
            <p className="text-muted-foreground">
              Controle inteligente de gastos pelo WhatsApp
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 GastosBot. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;