//Get useful testing functions from mocha and chai

const {describe,it} = require('mocha');
const {expect} = require('chai');

//Unit test for problem 1

const {reverse_alph} = require('./PS1.P1.js');

describe('unit test for reverse the alphabet of a string',()=>{
    it('should return the string in reverse alphabet order 1',()=>{
        let str = reverse_alph('supercalifragilisticexpialidocious');
        expect(str).to.be.equal('xuutsssrrppoollliiiiiiigfeedcccaaa');
    })
    it('should return the string in reverse alphabet order 2',()=>{
        let str = reverse_alph('aabbccddeeffgg');
        expect(str).to.be.equal('ggffeeddccbbaa');
    })
    it('should return the string in reverse alphabet order 3',()=>{
        let str = reverse_alph('123abc,.');
        expect(str).to.be.equal('cba321.,');
    })
})

//Unit test for problem 2

const{evaluate,add,sub,mult,div,exp} = require('./PS1.P2');

describe('unit test to perform basic calculations',()=>{
    it('should return the result of 4+2',()=>{
        let val = evaluate('4+2');
        expect(val('4+2')).to.be.equal(6);
    })
    it('should return the result of 5*7',()=>{
        let val = evaluate('5*7');
        expect(val('5*7')).to.be.equal(35);
    })
    it('should return the result of 6-1',()=>{
        let val = evaluate('6-1');
        expect(val('6-1')).to.be.equal(5);
    })
    it('should return the result of 9/2',()=>{
        let val = evaluate('9/2');
        expect(val('9/2')).to.be.equal(4.5);
    })
    it('should return the result of 2^8',()=>{
        let val = evaluate('2^8');
        expect(val('2^8')).to.be.equal(256);
    })
})

//Unit test for problem 3

const{pass_decorator,decoratedvalue,replace_A} = require('./PS1.P3');

describe('unit test to perform expression_1',()=> {
    it('should return fragmented string by character c', ()=> {
        let decoratedFxn = decoratedvalue;
        expect(decoratedFxn).to.be.an('array');
        expect(decoratedFxn[0]).to.be.equal('super');
        expect(decoratedFxn[1]).to.be.equal('califragilisti');
        expect(decoratedFxn[2]).to.be.equal('cexpialido');
        expect(decoratedFxn[3]).to.be.equal('cious');
    })
})

describe('unit test to perform expression_2',()=> {

    it('should have property originalString', () => {
        expect(replace_A).to.have.property('originalString');
        expect(replace_A.originalString).to.be.equal('supercalifragilisticexpialidocious');
    })
    it('should have property modifiedString', () => {
        expect(replace_A).to.have.property('modifiedString');
        expect(replace_A.modifiedString).to.be.equal('supercAlifrAgilisticexpiAlidocious');
    })
    it('should have property numberReplaced', () => {
        expect(replace_A).to.have.property('numberReplaced');
        expect(replace_A.numberReplaced).to.be.equal(3);
    })
    it('should have property length', () => {
        expect(replace_A).to.have.property('length');
        expect(replace_A.length).to.be.equal(34);
    })
})