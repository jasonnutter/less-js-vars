import lessJsVars from '../src';
import fs from 'fs';

const vars = fs.readFileSync(`${__dirname}/vars.less`, 'utf8');

test('parses less vars', () => {
    const parsedVars = lessJsVars(vars);
    expect(parsedVars.var1).toBe('#ccc');
    expect(parsedVars.var2).toBe('#ddd');
    expect(parsedVars.varthree).toBe('#fff');
    expect(parsedVars.varFour).toBe('#000');
    expect(parsedVars.varFive).toBe('#aaa');
    expect(parsedVars.varSix).toBe('red');
    expect(parsedVars.varSeven).toBe('768px');
    expect(parsedVars.mediaMaxWidth).toBeUndefined();
});

test('parses empty file', () => {
    const empty = lessJsVars('');
    expect(empty).toEqual({});

    const nill = lessJsVars(null);
    expect(nill).toEqual({});

    const undf = lessJsVars(undefined);
    expect(undf).toEqual({});
});
