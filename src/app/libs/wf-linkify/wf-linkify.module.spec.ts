import { WfLinkifyModule } from './wf-linkify.module';

describe('WfLinkifyModule', () => {
  let wfLinkifyModule: WfLinkifyModule;

  beforeEach(() => {
    wfLinkifyModule = new WfLinkifyModule();
  });

  it('should create an instance', () => {
    expect(wfLinkifyModule).toBeTruthy();
  });
});
