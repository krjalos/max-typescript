export function Autobind(_: any, _2: string | any, descriptior: PropertyDescriptor) {
  const originalMethod = descriptior.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    }
  }

  return adjustedDescriptor;
}
