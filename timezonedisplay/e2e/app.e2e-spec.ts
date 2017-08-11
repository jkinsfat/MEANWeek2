import { TimezonedisplayPage } from './app.po';

describe('timezonedisplay App', () => {
  let page: TimezonedisplayPage;

  beforeEach(() => {
    page = new TimezonedisplayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
