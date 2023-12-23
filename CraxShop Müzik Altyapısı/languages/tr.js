const language = {
    loadevent: "Yüklenen player eventi",
    loadcmd: "Yüklenen komut",
    ready: " başarıyla bağlandı.",
    loadslash: "Uygulama [/] komutları başarıyla yeniden yüklendi.",
    error1: "Projenize Girdiğiniz Bot Tokeni Yanlış Veya Botunuzun İNTENTLERİ KAPALI!",
    error2: "Lütfen projenizdeki bot tokeninizi config.js veya .env dosyanızda ayarlayın!",
    loadclientevent: "Yüklenen client eventi",
    embed1: "Bu komutu kullanmak için bu sunucuda <@&{djRole}>(DJ) rolünün ayarlanmış olması gerekir. Bu role sahip olmayan kullanıcılar {cmdMAP}'ı kullanamaz",
    message1: "Bir ses kanalına bağlı değilsiniz. ❌",
    message2: "Benimle aynı ses kanalında değilsiniz. ❌",
    message3: "Yetersiz yetki",
    msg4: "Bir şeyler ters gitti",
    msg5: "Şu anda çalan müzik yok. ❌",
    msg6: "Müziği Kaydet",
    msg7: "Playlist adını yaz.",
    msg8: "Bu şarkı canlı yayın, görüntülenecek süre verisi yok. 🎧",
    msg9: "**✅ Başarılı:** veriler güncellendi.",
    msg10: "Bu ada sahip bir oynatma listeniz zaten yok. ❌",
    msg11: "Bu müzik zaten bu oynatma listesinde var. ❌",
    msg12: "müzik çalma listenize eklendi.",
    error3: "Uygulama [/] komutları yeniden yüklenirken hata oluştu: ",
    error4: "UYARI: Görünüşe göre config.js dosyasına geçerli bir mongodb url'sini yazmamışsınız? Eğer bunu yapmazsanız, müzik komutları çalışmayacaktır.",
    msg13: `🎵 Şuanda çalan: **{track?.title}** -> Kanal: **{queue?.connection.channel.name}** 🎧`,
    msg14: "Kuyruk boş. Biraz daha müzik çalabilirsin, hoşçakal... ✅",
    msg15: "Kanalımda kimse kalmadığı için bağlantıyı kestim. ❌",
    msg16: "Ses kanalına bağlanmada sorun yaşıyorum. ❌ Birisi bağlantımı kesmiş gibi? Çok üzgünüm. 😔",
    msg17: "Önceki parça yok! ❌",
    msg18: "Şuanda çalan **{queue.previousTracks[1].title}**. ✅",
    msg19: " Bot İstatistikleri",
    msg20: "Yenile",
    msg21: "**Süreniz Doldu!**",
    msg22: "**✅ Veriler Güncellendi!**",
    msg23: "Çalma kuyruğu boş. ❌",
    msg24: "Bütün çalma listesi temizlendi. 🗑️",
    msg26: "Bir DJ rolü belirtmezseniz, komutu kullanamazsınız!",
    msg25: "DJ rolü başarıyla <@&{role}> olarak ayarlandı.",
    msg27: "DJ rolü başarıyla silindi.",
    msg28: "DJ rolü henüz belirlenmedi.",
    msg29: `Lütfen geçerli bir filtre adı girin. ❌\n{filters}`,
    msg30: `Lütfen geçerli bir filtre adı girin. ❌\n{filters}`,
    msg31: `Uygulandı: **{filter}**, Filtre Durumu: **{status}**\n **Unutmayın, müzik uzunsa filtre uygulama süresi buna göre daha uzun olabilir.**`,
    msg32: "Aşağıdaki komutları kullanarak eşsiz müzik zevkinizi arttırabilirsiniz. Dilediğiniz müziği açın ve dinleyin. Tüm müzik platformları desteklenmektedir.",
    msg33: "Bot Komutları",
    msg34: "Burada zaten aktif bir komutunuz var. ❌",
    msg35: "Kuyruk",
    msg36: "Şuan Çalan Müzik",
    msg37: "Döngüyü Kapat",
    msg38: "Tekrarlama Modu",
    msg39: `> **Bir seçim yapmaya ne dersiniz?**
    > **Kuyruk:** Kuyruğu döngüye sokar.
    > **Şuan Çalan Müzik:** Geçerli şarkıyı döngüye alır.
    > **Döngüyü Kapat:** Tekrarlama modunu kapatır.`,
    msg40: "Kuyruk Döngü Modu",
    msg41: "Bir şeyler yanlış gitti. ❌",
    msg42: "Şuan Çalınan Müzik Döngü Modu",
    msg43: "Döngü modu zaten etkin değil. ❌",
    msg44: `Döngü Modu **Kapalı** 🔁`,
    msg45: "Süre doldu",
    msg46: "Döngü Modu - Bitti",
    msg47: 'Playliste Kaydet',
    msg48: "müzik durduruldu! ✅",
    msg49: `Mesaj Hızı`,
    msg50: `Mesaj Yanıt Hızı`,
    msg51: `API Yanıt Hızı`,
    msg52: `Oynatma listesi yok. ❌`,
    msg53: `Bu oynatma listesini oynatma izniniz yok. ❌`,
    msg54: `Zaten bu ada oynatma listesinde müzik yok. ❌`,
    msg55: `Ses kanalınıza katılamıyorum. ❌`,
    msg56: `Playlist yükleniyor... ✅`,
    msg57: `<@{interaction.member.id}>, **{music_filter.length}** müzik kuyruğa eklendi. ✅`,
    msg58: `Bu ada sahip bir oynatma listesi yok. ❌`,
    msg59: `Aramak istediğiniz parçanın adını yazın. ❌`,
    msg60: `Arama sonucu bulunamadı! ❌`,
    msg61: "Müzik(ler) yükleniyor... 🎧",
    msg62: "isimli liste playliste eklendi. ✅",
    msg63: `Kuyruk boş. ❌`,
    msg64: "Sunucu Müzik Listesi",
    msg65: "Şuanda çalan müzik",
    msg66: "İsteyen",
    msg67: "Sayfa",
    msg68: `Komut iptal edildi. ✅`,
    msg69: `Sunucu Müzik Listesi - Süre Doldu`,
    msg70: `Bu komutu kullanmak için süreniz doldu, komutu tekrar kullanmak için \`/queue\` yazabilirsiniz.`,
    msg71: `Bir şeyler yanlış gitti. ❌ Daha önce müziği durdurmamış gibisin.`,
    msg72: "Müzik devam ediyor! ✅",
    msg73: `Lütfen geçerli bir şarkı adı girin. ❌`,
    msg74: `Arama Sonucu Bulunamadı! ❌`,
    msg75: "Aranan Müzik",
    msg76: "**1** ile **{maxTracks.length}** arasında bir şarkı seçin ⬇️",
    msg77: `Müzik arama isteği iptal edildi. ✅`,
    msg78: `Yükleniyor... 🎧`,
    msg79: "kuyruğa eklendi. ✅",
    msg80: `Şarkı arama süresi doldu ❌`,
    msg81: "İptal",
    msg82: `The number you entered is higher than the amount of songs in the queue. ❌`,
    msg83: "Müzik geçildi ✅",
    msg84: `Bu şarkı canlı yayın, görüntülenecek süre verisi yok. 🎧`,
    msg85: `Müzik kapatıldı. Daha sonra görüşürüz. ✅`,
    msg86: "Güncelle",
    msg87: `Şuanki Ses Düzeyi: **{queue.volume}** 🔊\n**Sesi değiştirmek için \`1\` ile \`{maxVol}\` arasında bir sayı yazın.**`,
    msg88: `Değiştirmek istediğiniz ses seviyesi zaten mevcut ses seviyesi ile aynı ❌`,
    msg89: `**Sesi değiştirmek için \`1\` ile \`{maxVol}\` arasında bir sayı yazın.** ❌`,
    msg90: "Yeni ses düzeyi:",
    msg91: `Oluşturmak istediğiniz çalma listesinin adını yazın. ❌`,
    msg92: `Bu ada sahip bir oynatma listesi zaten var. ❌`, 
    msg93: `30'dan fazla oynatma listeniz olamaz. ❌`,
    msg94: "Oynatma listesi oluşturuluyor... 🎧",
    msg95: "Oynatma listesi oluşturuldu! 🎧",
    msg96: `Bu ada sahip bir oynatma listeniz zaten yok. ❌`,
    msg97: "Oynatma listesi siliniyor... 🎧",
    msg98: "Oynatma listesi silindi! 🎧",
    msg99: `Aramak istediğiniz parçanın adını yazın. ❌`,
    msg100: `Müziği eklemek istediğiniz çalma listesinin adını yazın. ❌`,
    msg101: `Bir oynatma listesinde en fazla {max_music} müzik bulunabilir. ❌`,
    msg102: "Müzik(ler) yükleniyor... 🎧",
    msg103: "Tüm müzikler çalma listenize eklendi! 🎧",
    msg104: `Bu müzik zaten bu oynatma listesinde var. ❌`,
    msg105: "oynatma listesine eklendi! 🎧",
    msg106: `Müziği silmek istediğiniz çalma listesinin adını yazın. ❌`,
    msg107: `Zaten bu ada sahip bir müziğiniz yok. ❌`,
    msg108: "Müzik siliniyor... 🎧",
    msg109: "Müzik silindi. 🎧",
    msg110: "Aramak istediğiniz çalma listesinin adını yazın. ❌",
    msg111: `Bu oynatma listesinde hiç müziğiniz yok. ❌`,
    msg112: "En İyi Herkese Açık Oynatma Listeleri",
    msg113: `Bu komutu kullanmak için süreniz doldu, komutu tekrar kullanmak için \`/playlist top\` yazabilirsiniz.`,
    msg114: `Hiç herkese açık oynatma listesi yok. ❌`,
    msg115: "Senin Oynatma Listelerin",
    msg116: `müzik`,
    msg117: `Herhangi bir oynatma listeniz yok. ❌`,
    msg118: "Bu komutu kullanmak için süreniz doldu, komutu tekrar kullanmak için \`/playlist list {name}\` yazabilirsiniz.",
    msg119: "**/play playlist <liste-ismi>** komutu ile playlistleri dinleyebilirsiniz.\nBir listedeki müzikleri görmek için **/playlist list <list-name>** yazın.",
    msg120: "Lütfen bir metin kanalı belirt.",
    msg121: "<#{channel}> isimli kanal komut kullanma kanalı listesine eklendi artık sadece listedeki kanallarda bot komutu kullanılabilecek.",
    msg122: "Zaten kayıtlı bir veri yok.",
    msg123: "<#{channel}> isimli kanal komut kullanma kanalı listesinden silindi.",
    msg124: "Bu kanal zaten kommut kullanma kanalı listesinde var.",
    msg125: "Bu kanal bir metin kanalı değil.",
    msg126: "❌ Bu sunucuda komut kullanabileceğin kanal listesi şudur: {channel_filter}",
    msg127: "Komut bulunamadı.",
    error7: "Lütfen bu komutu daha sonra tekrar deneyin. Olası hata bot geliştiricilerine bildirildi.",
    msg128: "Müzik çalarken beni susturdun. Bu yüzden müziği durdurdum. Eğer mutemi açarsan devam edeceğim. 😔",
    msg129: "oynatma",
    msg130: "Lütfen geçerli bir sayı yaz.",
    msg131: "listede yer alan komutları kullanabilmek için bota oy vermen gerekli.",
    msg132: "Zaten durdurulmuş müzik yok.",
    msg133: "Çalma listesindeki sırayı karıştırdım.",
    msg134: "Yanlış kullanım. Örnek: `5:50` | `1:12:43`",
    msg135: "Çalma süresi başarıyla {queue.formattedCurrentTime} olarak ayarlandı.",
    msg136: "Otomatik oynatma şu anda açık. Artık rastgele müzikler açacağım.",
    msg137: "Otomatik oynatma şu anda kapalı.",
    }
    module.exports = language;
    
