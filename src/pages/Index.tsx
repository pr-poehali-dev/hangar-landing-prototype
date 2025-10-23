import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight">
                СТРОИТЕЛЬСТВО АНГАРОВ
              </h1>
              <p className="text-xl font-light opacity-90">
                Промышленные решения полного цикла
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div>
                  <div className="text-4xl font-black text-secondary">500+</div>
                  <div className="text-sm opacity-75">объектов сдано</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-secondary">12</div>
                  <div className="text-sm opacity-75">лет на рынке</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-secondary">30</div>
                  <div className="text-sm opacity-75">дней до запуска</div>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold mt-4"
              >
                Получить расчет
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="aspect-square bg-muted/20 rounded-sm flex items-center justify-center border border-primary-foreground/20">
                <Icon name="Building2" size={120} className="opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-primary mb-12 text-center">
            ПРЕИМУЩЕСТВА
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <div className="flex items-start gap-4">
                <Icon name="Shield" size={32} className="text-secondary flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">25 лет</div>
                  <div className="text-sm text-muted-foreground">гарантия на конструкции</div>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <div className="flex items-start gap-4">
                <Icon name="Zap" size={32} className="text-secondary flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">30 дней</div>
                  <div className="text-sm text-muted-foreground">средний срок строительства</div>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <div className="flex items-start gap-4">
                <Icon name="TrendingDown" size={32} className="text-secondary flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">-40%</div>
                  <div className="text-sm text-muted-foreground">экономия на отоплении</div>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <div className="flex items-start gap-4">
                <Icon name="FileCheck" size={32} className="text-secondary flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">полный пакет документов</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-primary mb-12 text-center">
            ТИПЫ АНГАРОВ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group">
              <div className="aspect-video bg-accent flex items-center justify-center">
                <Icon name="Warehouse" size={64} className="text-accent-foreground opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Каркасные</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Пролет до 50 метров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Высота до 20 метров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Срок монтажа 20-30 дней</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>От 12 000 ₽/м²</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="overflow-hidden group">
              <div className="aspect-video bg-accent flex items-center justify-center">
                <Icon name="Home" size={64} className="text-accent-foreground opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Арочные</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Пролет до 30 метров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Без внутренних опор</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Срок монтажа 15-25 дней</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>От 9 500 ₽/м²</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="overflow-hidden group">
              <div className="aspect-video bg-accent flex items-center justify-center">
                <Icon name="Box" size={64} className="text-accent-foreground opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Тентовые</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Пролет до 60 метров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Быстровозводимые</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Срок монтажа 10-15 дней</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>От 7 000 ₽/м²</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-primary mb-12 text-center">
            ЭТАПЫ РАБОТЫ
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Заявка", icon: "Phone" },
              { num: "02", title: "Расчет", icon: "Calculator" },
              { num: "03", title: "Проект", icon: "FileText" },
              { num: "04", title: "Монтаж", icon: "Wrench" },
              { num: "05", title: "Сдача", icon: "CheckCircle" }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 rounded-sm bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Icon name={step.icon as any} size={32} className="text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <div className="text-4xl font-black text-secondary/30 mb-2">{step.num}</div>
                <div className="font-bold text-primary">{step.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black mb-6">
            ПОЛУЧИТЕ РАСЧЕТ СТОИМОСТИ
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Оставьте заявку — перезвоним через 15 минут
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-primary-foreground text-primary"
              required
            />
            <Input
              placeholder="Телефон"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-primary-foreground text-primary"
              required
            />
            <Input
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-primary-foreground text-primary"
              required
            />
            <Button 
              type="submit"
              size="lg" 
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
            >
              Отправить заявку
            </Button>
          </form>
          <p className="text-sm opacity-75 mt-6">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </section>

      <footer className="bg-accent text-accent-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@hangar.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Адрес</h3>
              <p className="text-sm opacity-90">
                Москва, ул. Промышленная, д. 15
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Режим работы</h3>
              <p className="text-sm opacity-90">
                Пн-Пт: 9:00 - 18:00<br />
                Сб-Вс: выходной
              </p>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            © 2024 Строительство ангаров. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
