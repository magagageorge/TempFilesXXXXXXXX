import { WfLinkPreviewModule } from './wf-link-preview.module';

describe('WfLinkPreviewModule', () => {
  let wfLinkPreviewModule: WfLinkPreviewModule;

  beforeEach(() => {
    wfLinkPreviewModule = new WfLinkPreviewModule();
  });

  it('should create an instance', () => {
    expect(wfLinkPreviewModule).toBeTruthy();
  });
});
