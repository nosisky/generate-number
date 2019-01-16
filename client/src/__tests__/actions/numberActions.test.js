import expect from 'expect';
import moxios from 'moxios';
import numberMocks from '../../../__mocks__/number'
import {
  generateNumbers,
  listNumbers
} from '../../actions/numberActions';

describe('Phone number generators', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('retrieves all phone numbers in the database', () => {
  it('gets phone numbers', async (done) => {
    moxios.stubRequest('api/list', {
      status: 200,
      response: {
        phoneNumbers: numberMocks
      }
    });
     listNumbers()
      .then((data) => {
        expect(data.data.phoneNumbers).toEqual(numberMocks)
      });
    done();
  });

    it('generates phone numbers', async (done) => {
    moxios.stubRequest('api/generate', {
      status: 200,
      response: {
        phoneNumbers: numberMocks
      }
    });
     generateNumbers()
      .then((data) => {
        expect(data.data.phoneNumbers).toEqual(numberMocks)
      });
    done();
  });
});
});