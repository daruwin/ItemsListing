import { ItemsListingPage } from './app.po';

describe('items-listing App', function() {
  let page: ItemsListingPage;

  beforeEach(() => {
    page = new ItemsListingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
