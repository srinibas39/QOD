

const calculateProfitLoss = (cp, sp) => sp > cp ? `profit=${sp - cp}` : `loss=${cp - sp}`
let c = calculateProfitLoss(3125, 1125); //profit=500
console.log(c);