const { balanceDifference } = require('../balanceDifference');
const send = require('../send');
const { ether } = require('../ether');

require('../setup');

contract('balanceDifference', function ([sender, receiver]) {
  it('returns balance increments', async function () {
    (await balanceDifference(receiver, () =>
      send.ether(sender, receiver, ether(1)))
    ).should.be.bignumber.equal(ether(1));
  });

  it('returns balance decrements', async function () {
    (await balanceDifference(sender, () =>
      send.ether(sender, receiver, ether(1)))
    ).should.be.bignumber.equal(ether(-1));
  });
});
