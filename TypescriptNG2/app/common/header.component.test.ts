
import {Header} from './header.component';

describe('Header Tests', () => {
    it('should have a name on load', () => {
        var header = new Header();
        expect(header.username).toEqual('Kris Kringle');
    });
});