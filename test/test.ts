import { expect } from 'chai';
import 'mocha';
import axios from 'axios';
import { Spartan } from '../src/Entities/Spartan'
import 'dotenv/config'

describe('First test', () => {
    it('should return a valid object', () => {
        const spartan = new Spartan('Leonidas', 1020);
        expect(spartan).to.be.a('object');
    });
});


describe('Second test', () => {
    it('should return a valid JSON', async () => {
        try {
            const result = await axios.get(`${process.env.APP_SILICO}/api/list/country`, {
                headers: {
                    'apiKey': process.env.APP_API_KEY
                }
            });
            console.log(result.data)
        } catch (error) {
            console.log(error.message)
        }
    });
});