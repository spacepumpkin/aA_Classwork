require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  # let(:incomplete_user) { User.new(username: "", password: "password") }
  
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:session_token) }
  it { should validate_length_of(:password).is_at_least(6) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_uniqueness_of(:username) }
  it { should validate_uniqueness_of(:session_token) }

  subject(:porkchop) { User.create(username: "porkchop", password: "password", session_token: SecureRandom::urlsafe_base64(16)) }
  
  describe "session_token" do
    it "assigns session_token if none is given" do
      expect(FactoryBot.build(:user).session_token).not_to be_nil
    end
  end

  describe "reset_session_token!" do
    it "resets the user session_token" do
      user = FactoryBot.create(:user, username: 'Luke')
      old_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).not_to eq(old_token)
  
    end  
  end  

  describe "password=" do
    it "encrypts password using BCrypt" do 
      # user = User.new(username: "luke", password: "password")
      expect(BCrypt::Password).to receive(:create).with("password")
      user = FactoryBot.build(:user) # User.new 
      # debugger
    end
    
    it "assigns a password_digest" do
      user = FactoryBot.build(:user) # User.new 
      expect(user.password_digest).to_not be_nil
      expect(user.password_digest).to_not eq("password")
    end
  end


  describe "password_matches?" do
    it "check if users password_digest matches input password" do
      user = FactoryBot.build(:user) # user w/ password & password_digest
      # expect(BCrypt::Password.create(user.password)).to eq(user.password_digest)
      expect(user.password_matches?(user.password)).to eq(true)
    end  
  end  

  describe "find_by_credentials" do
    # user = FactoryBot.build(:user)
    let(:user) { User.create(username: "joker", password: "password") }
    context "with the correct username and password" do
      it "returns user" do
        expect(User.find_by_credentials(user.username, "password")).to eq(user)
      end  
    end 
    
    context "without the correct username and password" do
      it "returns nil" do
        expect(User.find_by_credentials(user.username, "fakepass")).to be_nil
      end
    end
  end  
end
