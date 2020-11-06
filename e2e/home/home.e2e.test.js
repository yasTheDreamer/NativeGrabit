describe('Home Screen', () => {
  it('should have a title ', async () => {
    await expect(element(by.text('Delivering Everything Else'))).toBeVisible();
  });

  it('should have 2 sign buttons visible', async () => {
    await expect(element(by.text('Sign up'))).toBeVisible();
    await expect(element(by.text('Sign in'))).toBeVisible();
  });

  it('should go to sign screen on click', async () => {
    (await element(by.text('Sign up')).tap()) ||
      (await element(by.text('Sign in')).tap());
    await expect(element(by.text('Reduced Delivery fees'))).toBeVisible();
    await expect(element(by.text('Delivery on time'))).toBeVisible();
  });
});
