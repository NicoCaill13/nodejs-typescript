import { expect } from 'chai';
import 'mocha';
import {Spartan} from '../src/Domain/Entities/Spartan'

describe('First test', () => {
    it('should return a valid object', () => {
        const spartan = new Spartan('Leonidas', 1020);
        expect(spartan).to.be.a('object');
    });
});