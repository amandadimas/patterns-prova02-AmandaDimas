// Implementando com Adapter

class LegacyPaymentSystem {
    makePayment(amount) {
      console.log(`Pagando R$${amount} com sistema legado.`);
    }
  }
  
  class ModernPaymentAPI {
    process(amountInCents) {
      console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
    }
  }
  
  // === Adapter ===
  class ModernPaymentAdapter {
    constructor(modernAPI) {
      this.modernAPI = modernAPI;
    }
  
    makePayment(amount) {
      // O PaymentProcessor chama makePayment() com valor em reais,
      // então o adapter converte para centavos e chama process()
      const amountInCents = amount * 100;
      this.modernAPI.process(amountInCents);
    }
  }
  
  // === Classe que usa o sistema de pagamento ===
  class PaymentProcessor {
    constructor(system) {
      this.system = system;
    }
  
    pay(amount) {
      this.system.makePayment(amount);
    }
  }
  
  // === Cliente ===
  
  // Usando sistema legado
  const legacy = new LegacyPaymentSystem();
  const legacyProcessor = new PaymentProcessor(legacy);
  legacyProcessor.pay(100);
  
  // Usando sistema moderno via Adapter
  const modernAPI = new ModernPaymentAPI();
  const modernAdapter = new ModernPaymentAdapter(modernAPI);
  const modernProcessor = new PaymentProcessor(modernAdapter);
  modernProcessor.pay(100);
  