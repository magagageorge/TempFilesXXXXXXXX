import { WfHoverCardModule } from './wf-hover-card.module';

describe('WfHoverCardModule', () => {
  let wfHoverCardModule: WfHoverCardModule;

  beforeEach(() => {
    wfHoverCardModule = new WfHoverCardModule();
  });

  it('should create an instance', () => {
    expect(wfHoverCardModule).toBeTruthy();
  });
});
