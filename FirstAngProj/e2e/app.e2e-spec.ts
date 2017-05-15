import { FirstAngProjPage } from './app.po';

describe('first-ang-proj App', () => {
  let page: FirstAngProjPage;

  beforeEach(() => {
    page = new FirstAngProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
