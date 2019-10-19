import { MynetworkModule } from './mynetwork.module';

describe('MynetworkModule', () => {
  let mynetworkModule: MynetworkModule;

  beforeEach(() => {
    mynetworkModule = new MynetworkModule();
  });

  it('should create an instance', () => {
    expect(mynetworkModule).toBeTruthy();
  });
});
