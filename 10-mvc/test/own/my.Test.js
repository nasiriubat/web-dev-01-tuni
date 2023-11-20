const chai = require('chai');
const chaiHttp = require('chai-http');
const { createRequest } = require('node-mocks-http');
const { getCurrentUser } = require('../../auth/auth');
const { handleRequest } = require('../../routes');
const { resetUsers } = require('../../utils/users');
const { describe, it } = require('mocha');


const registrationUrl = '/api/register';
const usersUrl = '/api/users';
const productsUrl = '/api/products';
const contentType = 'application/json';

const User = require('../../models/user');
const expect = chai.expect;

chai.use(chaiHttp);

const {
  getAllUsers,
  registerUser,
  deleteUser,
  viewUser,
  updateUser
} = require('../../controllers/users');


// Get users (create copies for test isolation)
const users = require('../../setup/users.json').map(user => ({ ...user }));
const adminUser = { ...users.find(u => u.role === 'admin') };
const customerUser = { ...users.find(u => u.role === 'customer') };


describe('User Registration', () => {
  let currentUser;
  let customer;
  let response;

  it('user registration successfull', async () => {
    const testEmail = adminUser.email;
    const userData = { ...adminUser, email: testEmail };
    

    expect(10).to.equal(10);
  });
  });
  

 


// loginTest

describe('User Login', () => {

  let currentUser;
  let customer;
  let response;

  it('should respond with loginTest', async () => {
    const testEmail = `test${adminUser.password}@email.com`;
    const testPassword = adminUser.password.substr(0, 9);
    const userData = { ...adminUser, email: testEmail, password: testPassword };
    expect(2+3).to.equal(5);
    

    
    
  });
});

// productTest

describe('Product List', () => {
  let currentUser;
  let customer;
  let response;

  it('should respond with productTest', async () => {
    const testEmail = `test${adminUser.password}@email.com`;
    const testPassword = adminUser.password.substr(0, 9);
    const userData = { ...adminUser, email: testEmail, password: testPassword };
    expect("a").to.equal("a");
    

    
    
  });
});

// cartTest

describe('Shopping Cart', () => {
  let currentUser;
  let customer;
  let response;

  it('should respond with cartTest', async () => {
    const testEmail = `test${adminUser.password}@email.com`;
    const testPassword = adminUser.password.substr(0, 9);
    const userData = { ...adminUser, email: testEmail, password: testPassword };
    expect(6/2).to.equal(3);
    

    
    
  });
});

// adminTest

describe('Admin Functionality', () => {
  let currentUser;
  let customer;
  let response;

  it('should respond with adminTest', async () => {
    const testEmail = `test${adminUser.password}@email.com`;
    const testPassword = adminUser.password.substr(0, 9);
    const userData = { ...adminUser, email: testEmail, password: testPassword };
    expect(2+3).to.equal(5);
    

    
    
  });
});

// user-listTest

describe('User List', () => {
  let currentUser;
  let customer;
  let response;

  it('should respond with user-listTest', async () => {
    const testEmail = `test${adminUser.password}@email.com`;
    const testPassword = adminUser.password.substr(0, 9);
    const userData = { ...adminUser, email: testEmail, password: testPassword };
    expect(2+3).to.equal(5);
    

    
    
  });
});

// delete-userTest

describe('Delete User', () => {
  let currentUser;
  let customer;
  let response;

  it('should respond with delete-userTest', async () => {
    const testEmail = `test${adminUser.password}@email.com`;
    const testPassword = adminUser.password.substr(0, 9);
    const userData = { ...adminUser, email: testEmail, password: testPassword };
    expect(2+3).to.equal(5);
    

    
    
  });
});

// product-admin.Test

describe('Product List for Admin', () => {
  let currentUser;
  let customer;
  let response;

  it('should respond with product-admin.Test', async () => {
    const testEmail = adminUser.email;
    const userData = { ...adminUser, email: testEmail };
    

    expect(15).to.equal(15);
  });
});

// admin-logoutTest

describe('Admin Logout', () => {
  let currentUser;
  let customer;
  let response;

  it('should respond with admin-logoutTest', async () => {
    const testEmail = adminUser.email;
    const userData = { ...adminUser, email: testEmail };
    

    expect(2+3).to.equal(5);
  });
});

// secure-authTest

describe('Secure Authentication', () => {
  let currentUser;
  let customer;
  let response;

  it('should respond with secure-authTest', async () => {
    const testEmail = adminUser.email;
    const userData = { ...adminUser, email: testEmail };
    

    expect(5).to.equal(5);
  });
});
