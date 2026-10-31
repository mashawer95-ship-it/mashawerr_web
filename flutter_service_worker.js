'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1514a28b1a354133eb92bca5eabc2738",
".git/config": "6d3d4fb6890271074a265bcd913222ab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "61da306556216d4396bfc736028cbf7e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "af6ba741512bf36d94776a7a12cf52f8",
".git/logs/refs/heads/main": "af6ba741512bf36d94776a7a12cf52f8",
".git/logs/refs/remotes/origin/main": "1b988d5ca45c639d4f1ee417296abdf2",
".git/objects/00/32bc4f58dbdcfdcb6ca080e5a0295d67e7a342": "930e3a8e451d4f7e8b87c2a41969d47b",
".git/objects/00/7aec1cd761bb7efb41f8c0189fb4302a0e17ac": "c50029b8fa9a08eeb7fe24ca98a42500",
".git/objects/00/b52f72db8d4a6b8e6161b68afddea08bd9d6af": "8e03728c9fb7855517739cca61c8f333",
".git/objects/01/8009062772782b6ad05966c141cba62c79536e": "45fdeaf638d72c882d0905875e47480a",
".git/objects/02/729a9f190441411a4aafffcc0001c9e70926cb": "59163d89ce902a2ed513c1a884c3076b",
".git/objects/05/2a554d7e833bbc7659805037b63446f4ba9418": "3f4ba5da6c686e9cc4ba38cefe13d8b3",
".git/objects/07/0df828e8faf292343fc63ed33d1587963212bc": "5dbc00420db842454f8e838a19e3cbd2",
".git/objects/08/625c19f3777e4d8ff987da35d48b1a1e4a9397": "d70a566eed57cd3d3aab967e341f2969",
".git/objects/09/2c95c30dd576c792198e5a395bbdd7c37e256f": "129a68211069a151dd5259e87d5dbb0a",
".git/objects/09/3c21a59af3293a0f8add48be2e6ba8bf56b02b": "cfa505b9422c63611b776e530b08150d",
".git/objects/09/47f15e1ce8b254d1cb0d27d1c21e5ed8a63d26": "1bb128fba6b49d102d688c8162ff74c3",
".git/objects/0a/80d1b1bd813bc7064795d8c1bd836a09c18813": "c2a8e9afb990eba2201927614eb93d23",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "b70b00b1b37be8c4ca1f02c81075510d",
".git/objects/0d/6f5381122eb55a414d04a51d9946fac6548b59": "f0e46db30e15671cf45b0b14e71a434d",
".git/objects/0d/d5a72920476d4ee5f3d59c9b7b487e249c9389": "16a4cc35c62968801273d16266a3d5d5",
".git/objects/0f/82a8360517d2c8b7d16e85434d40c6fb735954": "d8eef1e4b1bdc9f29a90077bd1a681f3",
".git/objects/11/49c8ac6bd013cbee06317aea8ebe7ac628ad8b": "54d1bb239ad55b299fc84a659afdf603",
".git/objects/12/642d85ac225774c875bae1340e4fb4782565a8": "196b02ecaba72adc401d137ba927849d",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "c224d16fe69d48663a961825ab08bb0b",
".git/objects/1b/4aa2a71fa4513c481ea02980daa143a8898877": "3e53e344cec44fce0c2828db843930c9",
".git/objects/1b/97c8e4f9e85b9c4d9bb8add981ea56e046ae24": "53c0bc1e53e0a29fe2b7c4f5e51100b2",
".git/objects/1d/75728abf4e556d1f694a73eaf46cd138a45470": "70ff1e268ae4e0a4d36343aea2ce1d5b",
".git/objects/22/098910ad5bd71c0f5a422e6cad0ff48fcddc14": "5389f83a560d8a8ba4c7987aec1861fd",
".git/objects/22/72b4f256e4cbe9528f1b2d11d6e46e22a051b3": "e84b9321124f87837cb2606e672fcbb0",
".git/objects/23/27dac36fc5ebed8311eb3bea74100c88b0cadd": "7e32a31397b589c0fac8153ea3e3685d",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "01dfd05d8fd39e0a684a4103f7c1b802",
".git/objects/27/c02cfabf78142b0564ea5cd2fe4b7a2eade416": "59932769cc10ac76371120933a40332c",
".git/objects/28/0345857f8323df3a9be50f25683adadd471140": "c63ddb305f52629e8369c70d4ccad229",
".git/objects/2a/9d5820ac285d392f23b88f2a5252d49f0395f5": "ebbc091075ddb2e0327703c779a7d5cc",
".git/objects/2b/fb9b325245bfb44847071ab6878bf2e7094ce7": "bc0980125b524c774c97e7ac20122fc5",
".git/objects/2f/4a643e19b3f872b7b958fffa27190672b21107": "b1e83638e3ee04ea3b990ed5dbc6bbd0",
".git/objects/30/7ef81bef5521aee11fd2aec66eb7a1c0eef194": "1a8f3d42f257434b07ad1f2fe2e0dc35",
".git/objects/31/fa44e6ee5de172cff7c22e555bdf398a2215d0": "075e058f6c8978c796db37d3ecf45019",
".git/objects/32/b56b7343376227a4ebe7477eeb003d6ebd9fda": "d1d51be6c732f5c43620c1a55ede24e6",
".git/objects/35/58b616e5927bb5223faf81a6f8fda394d3b84a": "01412534c176733129df7df86d0f93ae",
".git/objects/37/653cf38071c61fa17074ab9e81881eb2827422": "ad5dda02a5f920baec32224f416f0347",
".git/objects/3a/2d57d6208900795f5788ee0e3a367cff5388bd": "1f7276f792c024ae0401722e64d912ec",
".git/objects/3d/542557d71e57c6643f1f8f0972d14dd49b480e": "8fd446355f1c94a9ec06ee75d94ec643",
".git/objects/3d/a2533e71558e0d58c446478e443653591ca53f": "08f731379b0fc5c5ffffb96cd17e7bac",
".git/objects/3d/cdc565f5fdcceb038366e90c0bf6657a4fecd3": "78c4d0d55fb3c573d07354b501d1b378",
".git/objects/41/a6b4a604b3600285ebf2f93778abb7ea0564d0": "a99a677c9c62b0b7fdd7f3c4cedba67f",
".git/objects/42/2befa380332eb42d4e242bdfceb36c6cd29f54": "2e76b80eb44abf9c714384bcb84e8884",
".git/objects/42/c2f160380ff89775864c480edf5c46b0a47f0f": "4df6571ec17cbe0e36625d67fd1cc969",
".git/objects/44/41328a8cdf00e5339352d18276810c767da2b7": "995ef3e010a9b32edbf73d0d6d320ae3",
".git/objects/45/c9c5e4e4b7540ae90fdcad9dc8f213ad061c19": "61d6092bd34aa081e4480bc052a090d9",
".git/objects/46/49c713ecf383aee7ae1bd85f677c2888b21360": "1786a368949506b12e25ebb35153d2e2",
".git/objects/49/06532d25df3acb702454a97467df46052291ae": "0fe6a2d39570290a413c5596d1241528",
".git/objects/49/4acede0c520f847f75982ca1f671fc6eaa889e": "8c63c4e9b87187e8c3dd0c4ce8fe5baf",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "8855f92218c50b23f0647b98a9a40171",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "2eea3d52cb5524f7009f9e95a259eeb2",
".git/objects/4e/67625954db935f750e588e670ae2d2c63f5036": "5a3155d656a9f268779b84bf8d26c51a",
".git/objects/4f/6aa8961a12d1bcbb791ef01ee0b2c68ea6fe84": "29b76873f8518c8223d582d586cf1d75",
".git/objects/4f/e21dd17f0a8df2238191078cbc0bb5d979eabb": "2f434c039bc48f0daa7ba42ebacaefe7",
".git/objects/4f/f1b9928af44efc1b05b53f03b76dce979ded77": "06a90e46d0da19e4416c3b35a33ce39a",
".git/objects/50/1ba986da4666387f13e7fa46abf14b29a470dc": "7ace17ed3f6fe9b5dd10963d415649f3",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "8b3e4ca66c487684d03fb29c70fefbf1",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "0b86715160e6f64f628d3d3b7c64bc1b",
".git/objects/53/41acf93c19dd1bae21ba05c02be6c0ad8613d0": "ec5b6a832ffff0dd8420f2a5ce20a600",
".git/objects/53/446fbfbdc2b2b69d0cf6b932bf5b20be18f866": "ad7a45a29d1cae380b91700a47c52fc3",
".git/objects/53/5d521a6eb81a41b4934c5e4a78a41d50e7e2dc": "008f9d2cfc8ef7a05bc1009e968a471d",
".git/objects/56/6a3a797b716142aa844e4b2e8149fe45e996f7": "b556cb2f80b05adac09aa06bc760a741",
".git/objects/57/858dcc8571e74ff09ce665de1987791b9aa7f7": "f942371818d5bd75958ee092f6d489dc",
".git/objects/57/cd5647cba6e6548f111d75865386f89dc25022": "883bc13510f7903e6f42bf1210c31c54",
".git/objects/59/2602298ffcc7d29423c624b43c95a671c6ac17": "2ac5ba9b706edad568191de8ae6fb3ed",
".git/objects/5c/167c68d8cddda4d8cfa43c4e5d67708cd88c6b": "ff5f3034ba5b72ec627bb60875bb0832",
".git/objects/5d/dd2524cef22821600331887316349ab1ae59d0": "ba3547be470fc68d49057da6196769fe",
".git/objects/5e/81a197197e9f7c3431b7df53be43c1d5a4ac32": "8e0025c34c767ea2bcba7f53858e5e9d",
".git/objects/5f/2aef50e226d675928bb7dbf4dd8585c39076c2": "bfe19c881ce741e047274be68d51a845",
".git/objects/62/22d2aa48e4488f3cf57fe62a99498ac4bed6d0": "2c4b29a0d6163b5edb720a8bbd82972b",
".git/objects/62/b0eca9dfb6cfe26e0b70ba06cf7185336c3ee9": "9321279dfac03ca3a8e7b8551f64095a",
".git/objects/63/501c97ec2ac8d8cf7f142295606cbf6a40fa21": "b48d831a4332163304aec3fea50ba98e",
".git/objects/63/c68117246b986b0e65f8f1d7685d93cb26162c": "699edca2458923a4fe445f8b91119f69",
".git/objects/63/d6e3cd0919484d8a4b2011741393fa727cde07": "c0c3b4ba9a16d2b92f0d2d7a7daab151",
".git/objects/6b/3f0af334afd00685189077060a07a760def736": "c01dbcf19f2f00e67ba1249c85ea8f33",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "fae60530fa427e7dee065140e85f4339",
".git/objects/6b/a28cee518e3e26c9b2b0ce24e4f57900d79df0": "433daf0f9c10a09100f9a2c9d238027b",
".git/objects/6c/8712955da126c385c13065516f1c848c981658": "a20fc17a212fac00680c9a1916df44f8",
".git/objects/6c/87ee669b66624f49cb798a9479c4cf1123cc47": "48754d4155fbd41d38704c65fea25207",
".git/objects/6d/111add783e106b2ec82717811910d140b4b53e": "229cbbc9277ee3e061c4cc096ddfd875",
".git/objects/6e/f157f1dc099e0aeb271d6f1599f80207542801": "15a2ad3bf5b846ff65d093539e3a34a3",
".git/objects/6f/d59b4bccf36de0ebadd2b722fd5a0a9a9cd300": "4e75aa657d576600f6facc0c0338e0f3",
".git/objects/70/1ef66810bc1b99eb2e7b77e1494eec6c343815": "0bf2ed656dc2435f6cd812276446ae6e",
".git/objects/70/7ba7441a7f38abeb39ee76224f1ed7aacaa356": "aca576a496b8585d2c2f9e2124d62b11",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "675fb59ecbf118b82d6912b19ea6cbf1",
".git/objects/71/90dc4f399a2d16bcf65e7e4b9a027cbc49de69": "877c54910679909b731319d309fda3e7",
".git/objects/72/85fa1e75ed2e1d82b18baa1ef78991920109d3": "808def1f65651e2ffecd54ef4b07c6b9",
".git/objects/73/642cb1a3440a829bb27400d9b67b27f22410bd": "871b2d713eae6549d8d42fad26eb28fd",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "ba717a2ffd20992ad3a6345f7496888a",
".git/objects/77/4d085527ac16d552de24272cb2985f388cca2c": "88f066e6f6376e92e74cdcdbe7eb8210",
".git/objects/7c/4e68c671e24aa6693aa904f10ee0ffbbc750fd": "07e4196e388bd1861c4adc24cf98a868",
".git/objects/7c/9d30a7e536a696219e369620761b9713acaec0": "5f69c51fbec92175404375f7e86c87ad",
".git/objects/7d/316e5e4d29d6c6f25e1b2f5b5ec18e1d29964f": "2ead9d90421741f9c455a06bdd021fa5",
".git/objects/7f/6da9c267bd76dcb1453f945f8c3f6b03a18f52": "5086d5993d97cf915e996534d324e95b",
".git/objects/82/f34d6f7263eb853d6ff23cfac6cc55b88bbb87": "83d0dcb79f17db49377b4e55e0e6a641",
".git/objects/82/f5583a02d478e7ecdefae908fc39bd0ed58288": "478013658b34aad12e0794262effbf86",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "7d493efe11e63cc8b2cc68c9e7a7d1f1",
".git/objects/86/40306432cf8b5282e4169f60673d8756b46993": "871a66b38bcf7098b977e7fd9863875a",
".git/objects/87/8cc6de5c69e7ecdba2a741997d4ee3cdd49dc4": "856fbe65d16f404e35a733ba737a51fc",
".git/objects/88/cfae588bc0a1671232bfcca3a263c85ff6b9c8": "3d0bfe919502735e62b3e21b825b952d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
".git/objects/8b/2dd40a48e7409f50e677bc0e56005aee275c65": "d238e7dd703d002ecaefd8291a820a5f",
".git/objects/8d/fe8de3333f50b996f56b0b54a2be9f2adac306": "5af6930bcb2e28f32422c3736a57a4fc",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "fa339762c088e28f2995954dc404562f",
".git/objects/91/2f3b0e36446bed93f933cb59d2f881615fdaa8": "8f18a0b8fe4f0c628f2dbabad05af198",
".git/objects/91/dd7c586e9cab12ea16b75a53d6404e90ca2b59": "a7fecbbeb546ecece8e004e0ae936e6e",
".git/objects/92/bc0220082dc3d13aa5bd3923ebf261e35ad31a": "f8820c642791d70ee0d31e06e27ed319",
".git/objects/93/71e011480b44cc7fecd26678c3c3687f990638": "6a6a1a7daf2b89d855b97411eb47e0f5",
".git/objects/94/5300bbf4db60524d82aa4c9f893234c150929a": "97cb54ec4f7f02ec43b0dc1e7026fad2",
".git/objects/96/619f5dffb944a63a813bd059b2099a613a1e01": "22133a2ef398c5e999238853900045d1",
".git/objects/96/819ef17f50de744a5062bd8c3b3c088e318a20": "22a95702396ae7937fed2734a210d9b3",
".git/objects/98/914fa3acf1fadab43319b06185458a0beff5b5": "65883f3d4b91af84547f8fceddc674bd",
".git/objects/98/acdb53f3fad3e9fcf2f2ad586e0096f4354d8e": "5a86c598494298e8460e75e91a7a76e5",
".git/objects/99/4a1bf5c6e11b8b4892b1426595dfb8862929f6": "907b90c9db9ce725e63be61014c976bb",
".git/objects/9a/c273ea6e7b10151ca777e93e328d315c27c3f2": "d47175bb15aaabb47272e497ac5e793d",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "82a54dbd9be4e9c5a8843ac17c1592de",
".git/objects/9f/ee820db7e21545c21a588c848666dd2eb027a1": "c1357448dc632e1030055d6b5dc30d24",
".git/objects/a2/161cab49f92535c27d016fbb7e8c397a897c6d": "e5fb9b65963bda3095872ff69b2bea31",
".git/objects/a2/2775375cf44ff410277c7d0f6c0b32fbb82e4d": "82c6de293bef5fbaa330446bb530956d",
".git/objects/a2/b570b44734ed383eaa0e3b5fa8d26392f8fe3f": "ece50b3dc1186cba5f866f3a9bdfc1d3",
".git/objects/a6/bc7c9e5898b26525a5e1c9acf24da1b0f2d7b8": "2f2e6715faa3e5b5a432ee556189f07f",
".git/objects/a9/b63ef0dfa2d8076bb2fc6aa9cac24c676f5a16": "0fbca25b7c7772e78dacdcaf788c6144",
".git/objects/ab/5a27f3f9091608120babbea1935db1535730e9": "160c2c02fad8d29e10a767b6c9eef0bc",
".git/objects/ad/37e2c2c9d586095623ec6b10e8eccbeb6e36d3": "892162fcc1af787c9d63a9b3d026cdf0",
".git/objects/ae/a1d54eba8f4543e4bdc159998e8a4e7fd17b3b": "8e4b498853a64357241393113f036bb8",
".git/objects/af/b17ae74482855b0eac263a0a637d4f7724765b": "584bd45a3d351a378da77fc39a39eb3f",
".git/objects/b3/4a1ab3267db5e98f14143ae8abdb742faf3105": "0274dc3199b3511eaab35e90c13244df",
".git/objects/b3/cf725fa9247354aaa74f2df347c7e91ca296e6": "8db8fb3db3187a95b6dd8374e257fedc",
".git/objects/b4/fa82b643872aabdc8c8e73c093076a7394b1e3": "c3a91744bd24a6fec4dc768c7942ddcf",
".git/objects/b5/463ca19637f6c52d8ce26557d2dcec20366c05": "aedd04c9421709ae26c9c928fb8d1a53",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
".git/objects/b7/779e58525149592226077bcaa42a6c206ba66c": "927aabeb15bba99b4268e20d5295d1e4",
".git/objects/b7/79da124bb7922627f3d378d8f8bc51ac306c9d": "cbcf79ddeb770907cd0f70ad4a5fb097",
".git/objects/b8/8bba44ab454cba9cdef27ea8762c13f23ff816": "d5bbecdda6f2af9fcda56b3039254f97",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "428a4edb52ecd286497311f863fe0655",
".git/objects/ba/5a7920b3ca1dac540653ea93e80907d6ee1576": "08168d0ebcab5787208550c15a239aaa",
".git/objects/ba/9369d351493e036fba5b873d04b193dd4d8bf6": "9404081c2499cb75f88d8b2c45d2f527",
".git/objects/bb/cbb5340eae124ebaecbdc33eb14277e22b3df1": "adc081b9ca273750458688ec34ba8993",
".git/objects/bc/a450554a7a6763279a4e484bb1c1e5d6b83548": "b8be04df6f200f873357bfafe7a0d7e2",
".git/objects/bf/5f6d45eb740b2d22e44dffd13caf0a1d052f84": "8c542dfa8c3f6c7b9505c35598d72191",
".git/objects/c0/9035505ae06c6f3d63248cf015aab83583cc1a": "adb776f7f28b94261fbe2f3d814eb2bf",
".git/objects/c5/f04ac3ac89fa609916689178b6a42fc45fe19c": "73072f5e934ec42ea5095f86fb9b9f4e",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "f647fc3d553ae429d751a2e73d60ecfe",
".git/objects/ca/86a1692b0038e7332b7935ee33c0b03f7a0ae6": "998a85e0617260d309dc281e2955e814",
".git/objects/cc/bd53c1a61c58b29605805fb0b14cc68f370087": "a67a6ceedb4e85d0ec083de49c6012d9",
".git/objects/cd/395c9812e6040e6ff0bfa69ebcc33c1da67e0e": "f00acde99db78c46a72eba358e805075",
".git/objects/d1/025b927eeb9900618c2034406911500f4893d7": "b89a88a66e41681e6bd2032ac19b0bee",
".git/objects/d1/65082efb1666efdaf81e69a6559ab305048cce": "2f83b5663f087d8c32343ec4ebca8a61",
".git/objects/d2/2f4056597f189f74df81915ab3addd5a04dec5": "caa0d7989810742ddbf4814037ae93c0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
".git/objects/d5/1bade2c13089c1f2948339ac2c62996a86b5af": "17c5738d362323b1ae9512ef1ead6d08",
".git/objects/d5/5b356d2106db63071cadfe9c2cc6ed5a18ecea": "1e69d0c7880990769c193ba07d551ec0",
".git/objects/d5/e02dc2343f5de91d82002bb0850a4dece35806": "0812dd05ab52e03e8d323b777bf79f21",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
".git/objects/d6/b6fd94231c2253953986841e31791239a0f1db": "aba966dc515275d144b56a38ed1e0e35",
".git/objects/d7/a75d0626abbf3f4cd1344cb4349be72afd59fc": "ee7d5f9fd777850bf5ab96dfcb42f89d",
".git/objects/d7/fb50ec4f114435a54a4a5f6ed5da110d8a81d2": "38ac873c80fd2df9a2421073ab48eb58",
".git/objects/d8/fd619e5fc2ce269ec96b99e46ce625548a5107": "be9d0b6b89d3c11134370790a5901091",
".git/objects/d9/dc0146cdddb01b9097204945fce07c29a8ac98": "fbdce4d9745c9ab26cb74a56ed7d549c",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "78b3a709f531a50ad7207eaac9279372",
".git/objects/dd/1a5ddf05a7fd5dfc41f8def200b83f1ea466fd": "c8e24ae7044fe531d979562f0634631a",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "67bb6fc83e7f0503a18ea43a15f553e0",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "239072de7f67c2c2ea9210561575948f",
".git/objects/e3/c85457502f75c18585591bad371cc9d1189ec0": "37d1908976556ed7f67fd5f10ee2004b",
".git/objects/e4/548601b66064478b1b92446be5cea698e9cd5d": "ca314266b996d57d6e3d051fd1b75422",
".git/objects/e4/81ddb30ee0cfba7030e7b3e7da42f118b96031": "744f1cf9b9779e0ae376a9768024a9f3",
".git/objects/e4/9af6373bb81067ef6cdc1ef19e60d7914fb97c": "d0617bfb8602027e47299931a5402196",
".git/objects/e4/ee615b21960b24f6e3d4e45c0738640b279623": "2cbd2ee84c007240552a52f18bbf21de",
".git/objects/e8/46c963fe5b696622a1d7bcfa7af0b728b429fe": "90aff967128ab092c4d2a263fc400f02",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "1dfabeb9b2b507b75367586cb7fb284d",
".git/objects/e9/e33042d546f48e6aa837d400ca7bbadeebfb04": "f072d657da51ab89b56364e820e1fc01",
".git/objects/eb/62fd0d7ef50fc592c29ee057dfe166782ee690": "09167f55be4f1ab413413396655e261a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
".git/objects/ec/4a386078f400c733c2e6dbed016dfa689fde9d": "138304fad8cb03844a16ce74888ddd17",
".git/objects/f1/71d94ba0a15b5c685a500208f76d081f9cae6b": "f3b370f4ddd901e4a571625e123e2703",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
".git/objects/f4/bfdcf78cad202f09009a8a65821f900818e882": "4f4e130fe7e55a90dfd7a259f1042b47",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "db8c57f684c1c1d7e3892a31f31bd1ff",
".git/objects/f6/8f2b73682c438d5b1dd67a63b67606b700e187": "485475b1aa455fb320b3239be40271d7",
".git/objects/f6/a7c053b5a694d032281336b7a6f4bab832fc40": "31d74e3bfab8939c0a6ca35a0fdf3c23",
".git/objects/f7/8f118c89868b311abe870f7c7663fcb319937c": "1ac7cf905634b20561b93d622942d765",
".git/objects/f9/224aa5f47fd1b54b71d89d7d9986772d3f9443": "84594533a1c8cf917a05263d2ed6f807",
".git/objects/fa/6d95bfbf89536d46d6e7ca1847d92f0785ad89": "4c545bbd435c80c69af35a79f1e88f18",
".git/objects/fb/7882897c03bb2419fd3564315b53aff95b2dad": "fd34a60a338adebcd58ed382c53dc2b2",
".git/objects/fe/2f0d65fae8847b1372f2303a7fce3c7a98cd23": "92f2d640c7dc19360860ba6eb2590474",
".git/objects/ff/bc03ed97a0b88a77f8571846aa3f1a736cf60a": "bbed22b27c394c624c47a425f3401f8e",
".git/refs/heads/main": "03cadadf50da9c29b87c2c15188d57bb",
".git/refs/remotes/origin/main": "03cadadf50da9c29b87c2c15188d57bb",
"assets/AssetManifest.bin": "48dd2b90278713847c6ba1932eb57596",
"assets/AssetManifest.bin.json": "196da63d2fe2dfbbbbed146ab98cc520",
"assets/AssetManifest.json": "7b51fd56886d11770541972520d21501",
"assets/assets/cesium_3d_map.html": "b0c3ac997452adb9348923b00b249971",
"assets/assets/icons/apple-logo.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/assets/icons/email.png": "d36f7a6dce6ceb8cdcd93cc92db7cf87",
"assets/assets/icons/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/icons/mashawer_motorcycle_topdown.jpg": "d03b5bb6aaf8d9c289dc41762412c249",
"assets/assets/icons/real_motorcycle_rider_3d.png": "3cbc61cb0bf56c84b7c18af0eaa8fcde",
"assets/assets/icons/real_motorcycle_rider_side.png": "032f27a35e15e5feaec5c33a8b3b3ae2",
"assets/assets/logo/10.jpg": "5b8dc8446dc65e20e6cdbd4c731fd4ab",
"assets/assets/logo/11.jpg": "8ae8a7d12f4745d3d2b9c23cbe6ce08f",
"assets/assets/logo/12.jpg": "5b8dc8446dc65e20e6cdbd4c731fd4ab",
"assets/assets/logo/13.jpg": "bd999aa5609090d85f00a3522c36e216",
"assets/assets/logo/2.png": "290c40e20d21d3af4da2b0f57ea693ae",
"assets/assets/logo/3.png": "44a765b297d7f2772bc24fc1e36a2f1d",
"assets/assets/logo/4.png": "b7b8801ec01df135bee6835dba175764",
"assets/assets/logo/5.png": "678426184b1110a1d96dc81457970d36",
"assets/assets/logo/6.png": "8ba631f54e0db48ea910d0fccf3d11d0",
"assets/assets/logo/7.jpg": "98f174ac08edd3655459726f6ba342a8",
"assets/assets/logo/8.jpg": "f03a2d477eab9dff74b69c3c48015e86",
"assets/assets/logo/9.jpeg": "2f37cabfece65a76691eff8b21b28581",
"assets/assets/logo/image%25201.png": "17505d08430972c7832abba660b6ab8e",
"assets/assets/logo/image2.png": "954ab92518aecf879ba64368806b5796",
"assets/assets/logo/launcher_foreground.png": "edccb87e572f2ae5a32e9a4749bb81fc",
"assets/assets/logo/launcher_master.png": "37982e73755d1d46650fd71aa082ea01",
"assets/assets/logo/launcher_master_original_backup.png": "6941e418e6af8c514c2a39e7846fef6b",
"assets/assets/logo/Logo%2520mashawer.png": "4ca6fa52c199b63d7d2d722ba4ea3c4b",
"assets/assets/logo/logo_mashawerrr.png": "8413a62407845482916e11b0474ed903",
"assets/assets/logo/Mashawer-en%2520(1).png": "8b0dd90046e26713a39d5a1ef48f9986",
"assets/assets/logo/Mashawer-en%2520(2).png": "e87bf57bf929a496ff0a2cc0860d3aa6",
"assets/assets/logo/Mashawer-en(3).png": "545cfc914dd5216101a43f0ec65b8c57",
"assets/assets/logo/mashawerr.png": "fbdaa4c94ef326f6fdde73e77e78ee93",
"assets/assets/logo/mashwer-removebg-preview.png": "eda163d171e5a35b2ee4ffbfde857cc2",
"assets/assets/logo/Spalsh.mp4": "b99a324e4c5c61e60cea9925386f7973",
"assets/assets/logo/splash.png": "6e02c4db812d492aa8a7a20d215a2101",
"assets/assets/map_style_gray.json": "46cceb24201b979c448299e398381f00",
"assets/assets/map_style_night.json": "cd9e068b27865a156a23d484181252d2",
"assets/assets/sounds/order_waiting_tone.wav": "4fead8e895f00e8634210cd07b2a2a9a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "bc7e01459a561f5b81ff2bb622255643",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "4e2711405e7332a67da0b627252f4c56",
"firebase-messaging-sw.js": "116cac6c8a7efcb10f1d93acb1a290df",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "9d18a96b97a70fb17f2e85bf82162966",
"icons/Icon-192.png": "291f9cef9bc59663ca8bb307ab4fe253",
"icons/Icon-512.png": "0fbc4e9381b4fabe6323342d0e119b82",
"icons/Icon-maskable-192.png": "291f9cef9bc59663ca8bb307ab4fe253",
"icons/Icon-maskable-512.png": "0fbc4e9381b4fabe6323342d0e119b82",
"index.html": "3b53d27e387a175de7234b2fc65a074c",
"/": "3b53d27e387a175de7234b2fc65a074c",
"logo.png": "eda163d171e5a35b2ee4ffbfde857cc2",
"main.dart.js": "d2cedf1a6049f02cd8b6a54bcfa2c616",
"manifest.json": "aff410566bb9da24043d7ddd53b7551e",
"render.yaml": "76f68895fcda9b2ec7fe11bf0bdd5a21",
"version.json": "7b75545b52b6ede5d0aeed5ff7c6fc64",
"_redirects": "5f52dbefcf63c9f677ace09fcf8bc7d8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
