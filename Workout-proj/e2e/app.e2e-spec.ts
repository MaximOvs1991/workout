import { WorkoutProjPage } from './app.po';

describe('workout-proj App', () => {
  let page: WorkoutProjPage;

  beforeEach(() => {
    page = new WorkoutProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
