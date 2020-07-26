const index = require('./index')
const app = require('../../../app.js');
const conn = require('../../../db/index.js');

describe('GET /notes', () => {
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((err) => done(err));
    })
    after((done) => {
        conn.close()
            .then(() => done())
            .catch((err) => done(err));
    })

    it('OK, getting notes has no notes', (done) => {
        request(app).get('/notes')
            .then((res) => {
                const body = res.body;
                expect(body.length).to.equal(0);
                done();
            })
            .catch((err) => done(err));
    });
    it('OK, getting notes has 1 note', (done) => {
        request(app).post('/notes')
            .send({ address: 'NOTE TEST', text: 'BBB' })
            .send({ city: 'NOTE TEST', text: 'BBB' })
            .send({ country: 'NOTE TEST', text: 'BBB' })
            .send({ zipcode: 'NOTE TEST', text: 'BBB' })
            .send({ website: 'NOTE TEST', text: 'BBB' })
            .then((res) => {
                request(app).get('/notes')
                    .then((res) => {
                        const body = res.body;
                        expect(body).to.contain.property('address')
                        expect(body).to.contain.property('city')
                        expect(body).to.contain.property('country')
                        expect(body).to.contain.property('zipcode')
                        expect(body).to.contain.property('website')
                        expect(body.length).to.equal(1);
                        done();
                    })
            })
            .catch((err) => done(err));
    });
})