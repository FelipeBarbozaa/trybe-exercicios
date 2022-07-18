class Tv {
  brand: string;
  size: number;
  resolution: number;
  connections: string[];
  connectedTo?: string;

  constructor(brand: string, size: number, resolution: number, connections: string[], connectedTo?: string) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
    this.connectedTo = connectedTo;
  }

    turnOn(): void {
      console.log(`marca: ${this.brand}, tamanho: ${this.size}, resolução: ${this.resolution}, connections: ${this.connections}, conectado: ${this.connectedTo}`)
    }
}

const tv1 = new Tv('samsunng', 20, 800, ['HDMI', 'HDMI2'], 'HDMI');
console.log(tv1);
tv1.turnOn();
