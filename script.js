const connectButton = document.getElementById("connectButton");
const walletAddress = document.getElementById("walletAddress");
const walletBalance = document.getElementById("walletBalance");

connectButton.onclick = async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      const resp = await window.solana.connect();
      const address = resp.publicKey.toString();
      walletAddress.textContent = "Кошелек: " + address;

      const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"));
      const balance = await connection.getBalance(resp.publicKey);
      walletBalance.textContent = "Баланс: " + (balance / 1e9).toFixed(4) + " SOL";
    } catch (err) {
      console.error("Ошибка подключения:", err);
    }
  } else {
    alert("Установи Phantom Wallet!");
  }
};