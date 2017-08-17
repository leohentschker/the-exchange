export default (promise) => {
  promise
  .then(() => assert.fail('Expected throw not received'))
  .catch(error => {
    // TODO: Check jump destination to destinguish between a throw
    //       and an actual invalid jump.
    const invalidJump = error.message.search('invalid JUMP') >= 0;
    // TODO: When we contract A calls contract B, and B throws, instead
    //       of an 'invalid jump', we get an 'out of gas' error. How do
    //       we distinguish this from an actual out of gas event? (The
    //       testrpc log actually show an 'invalid jump' event.)
    const outOfGas = error.message.search('out of gas') >= 0;

    // TODO: Make sure that checking the opcode is the correct means
    // of determining if there is a require error
    const invalidOpcode = error.message.search('invalid opcode') >= 0;

    assert(
      invalidJump || outOfGas || invalidOpcode,
      "Expected throw, got '" + error + "' instead",
    )
    return
  })
}
