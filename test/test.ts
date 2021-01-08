import { expect } from 'chai';
import 'mocha';
import {Spartan} from '../src/Domain/Entities/Spartan'

describe('First test', () => {
    it('should return a valid object', () => {
        const spartan = new Spartan({name: 'Leonidas' , kills: 1026,  gender: 'Male' });
        console.log(spartan)
        expect(spartan).to.be.a('object');
    });
});