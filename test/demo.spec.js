import { add } from "../src/add";

test("1 + 1 = 2",()=>{
    let result = add(1,1);
    expect(result).toEqual(2);
});