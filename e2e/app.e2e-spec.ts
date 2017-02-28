import { NamigoPage } from './app.po';

describe('namigo App', () => {
  let page: NamigoPage;

  beforeEach(() => {
    page = new NamigoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
