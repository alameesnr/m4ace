const User = mongoose.model('User', userSchema);

// Async function to add and fetch users
async function run() {
  try {
    // Add a user
    const newUser = new User({
      name: 'John Doe',
      email: 'john@example.com',
      age: 28
    });
    await newUser.save();
    console.log('✅ User added:', newUser);

    // Fetch all users
    const users = await User.find();
    console.log('\n📋 All Users:');
    users.forEach(user => {
      console.log(user);
    });

  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    mongoose.connection.close();
  }
}
run();