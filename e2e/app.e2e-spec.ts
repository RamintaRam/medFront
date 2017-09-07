import { MedFrontPage } from './app.po';

describe('med-front App', function() {
  let page: MedFrontPage;

  beforeEach(() => {
    page = new MedFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
