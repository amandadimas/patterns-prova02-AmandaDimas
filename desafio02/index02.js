// Implementando com Bridge

// === Implementação (Implementor) ===
class Device {
    turnOn() {}
    turnOff() {}
  }
  
  // === Implementação concreta (ConcreteImplementor) ===
  class TV extends Device {
    turnOn() {
      console.log("TV ligada.");
    }
  
    turnOff() {
      console.log("TV desligada.");
    }
  }
  
  class Radio extends Device {
    turnOn() {
      console.log("Rádio ligado.");
    }
  
    turnOff() {
      console.log("Rádio desligado.");
    }
  }
  
  // === Abstração (Abstraction) ===
  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    pressPowerButton(on) {
      if (on) this.device.turnOn();
      else this.device.turnOff();
    }
  }
  
  // === Abstração refinada (Refined Abstraction) ===
  class AdvancedRemoteControl extends RemoteControl {
    mute() {
      console.log("Dispositivo mutado.");
    }
  }
  
  // === Cliente ===
  const tv = new TV();
  const radio = new Radio();
  
  const tvRemote = new RemoteControl(tv);
  tvRemote.pressPowerButton(true);
  tvRemote.pressPowerButton(false);
  
  const radioRemote = new AdvancedRemoteControl(radio);
  radioRemote.pressPowerButton(true);
  radioRemote.mute();
  radioRemote.pressPowerButton(false);
  