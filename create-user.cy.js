describe('Create New User', () => {
    it('Successfully create new user and verify data', () => {
      const user = {
        name: 'Dhea',
        job: 'QA',
      };
  
      cy.request('POST', 'https://reqres.in/api/users', user)
        .then((response) => {
          expect(response.status).to.equal(201);

          expect(response.body).to.have.property('name', user.name);
          expect(response.body).to.have.property('job', user.job);
          });
        });
});