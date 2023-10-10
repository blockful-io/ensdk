import namehash from '../src/namehash';

test('Should return 0x0 if name is empty', () => {
  const input = '';
  const output = namehash(input);
  const expected = `0x${'0'.repeat(64)}`;
  expect(output).toBe(expected);
});

test('Should return 0x0 if name is undefined', () => {
  const output = namehash();
  const expected = `0x${'0'.repeat(64)}`;
  expect(output).toBe(expected);
});

test('Should return correct namehash for TLD .eth', () => {
  const input = 'eth';
  const output = namehash(input);
  const expected = '0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae';
  expect(output).toBe(expected);
});

test('Should return correct namehash', () => {
  const input = 'blockful.eth';
  const output = namehash(input);
  const expected = '0x194774734a8c16665005fd2c68cb7cc80b5aa6ffcb0c56ace654bc614902cf7f';
  expect(output).toBe(expected);
});
