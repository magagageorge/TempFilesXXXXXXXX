import { DeviceDetectorModule } from '.';

describe('DeviceDetectorModule', () => {
  let deviceDetectorModule: DeviceDetectorModule;

  beforeEach(() => {
    deviceDetectorModule = new DeviceDetectorModule();
  });

  it('should create an instance', () => {
    expect(deviceDetectorModule).toBeTruthy();
  });
});
