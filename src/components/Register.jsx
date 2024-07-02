app.post('/register', async (req, res) => {
    const { name, id, email, phoneNumber } = req.body;

    // Generate wallet
    const wallet = ethers.Wallet.createRandom();
    const walletAddress = wallet.address;
    const privateKey = wallet.privateKey;

    // Encrypt the private key
    const encryptedPrivateKey = await wallet.encrypt(process.env.ENCRYPTION_PASSWORD);

    // Initialize user with 10000 tokens (assuming token contract is deployed and available)
    const initialTokens = ethers.utils.parseUnits('10000', 18);
    const tokenContract = new ethers.Contract(tokenAddress, tokenABI, provider);

    // Transfer initial tokens
    const signer = wallet.connect(provider);
    const tx = await tokenContract.connect(signer).transfer(walletAddress, initialTokens);
    await tx.wait();

    const user = new User({ name, id, email, phoneNumber, walletAddress, privateKey: encryptedPrivateKey });
    await user.save();
    res.send('User registered successfully');
});
