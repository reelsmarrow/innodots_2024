'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0b851b9661ed8cb2b87abe7e44c6ece5",
"assets/AssetManifest.bin.json": "c6f595fbec2127c69e3b5c3195072c33",
"assets/AssetManifest.json": "dac3f4031e0d8c546cc42ce46a530d74",
"assets/assets/fonts/HelveticaforTarget-Bold.ttf": "1a2617e694ef7b17b983a0f568697f26",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/icons/about-.svg": "414ca43357bd5948727fa562401c801d",
"assets/assets/icons/address.svg": "0948d6a0b057a8209883df8eac691f06",
"assets/assets/icons/add_address.svg": "8ecf32483c954c3836fc313fcbb3e860",
"assets/assets/icons/add_a_photo.svg": "e24cd380c726df3e8495e5a7c2c20773",
"assets/assets/icons/add_circle.svg": "46ef6ebd5bf4563b3725b678af24fed1",
"assets/assets/icons/ad_banner.svg": "849846e3bb0e5dcdbf1351e1303cc1f8",
"assets/assets/icons/arrow_link.svg": "08c23499a5636042e24b2ea1f67dfc83",
"assets/assets/icons/bookAppointment.svg": "17786daff481286a3f215cb7d33f8b3f",
"assets/assets/icons/bookmark.svg": "357d042cb85c582b0c10609b85e2bffa",
"assets/assets/icons/bounding_box.svg": "b3ceb45dfe69784192217cee5b69f5dd",
"assets/assets/icons/brand.png": "4f8ed0a25322cfda17ab1d3028aeb2ef",
"assets/assets/icons/branding.svg": "31f7147f93e74ebbdb92f958caae2a9a",
"assets/assets/icons/buy.svg": "299a8a08a14560a9c854a253b667379c",
"assets/assets/icons/calendar.svg": "91acac0f08ff5d102c38c690e36b39e9",
"assets/assets/icons/cancel_icon.svg": "dfd1405937153b78134965c2e0140dd4",
"assets/assets/icons/category.svg": "ecd37faddefaec75dc0540b0e74931c8",
"assets/assets/icons/category1.png": "9b0b6e77a3e5e0801b0ecd7e9071b002",
"assets/assets/icons/category2.png": "645aea7a00d1e360b22f6a4010231339",
"assets/assets/icons/certified.svg": "bc7cdd4bcb33d1e9bd88a4640f088f48",
"assets/assets/icons/check_circle.svg": "31c28c4d83dcd0c8182cd68accdf6ce4",
"assets/assets/icons/chevron_downward.svg": "28ca7fde36f185a82a07de29f095f2ca",
"assets/assets/icons/chevron_forward.svg": "d080532ee42d14dd1af0cd4f8baba787",
"assets/assets/icons/chevron_upward.svg": "a5c393fe0b2d02902b9de4635b00d72a",
"assets/assets/icons/closeMap.svg": "7fb88d773bf25df3893da09cc80bb2ab",
"assets/assets/icons/close_icon.svg": "bb5b07b1c16198b55e3fd7de182a61c2",
"assets/assets/icons/coupon_icon.svg": "d273dc2a22a08a7b98a44da832208e1d",
"assets/assets/icons/current_location.svg": "659013101279c472b674074b52383f2a",
"assets/assets/icons/default.svg": "9210938c178a88643e8e5eabb8779113",
"assets/assets/icons/delete_icon.svg": "a905b9e131839fc803a33e6d7448a644",
"assets/assets/icons/delivery.svg": "65997ad717224f7dba08ded3b29e99c9",
"assets/assets/icons/design.svg": "6d3753e358a68873d2f422bb752af423",
"assets/assets/icons/digital.svg": "81533e067302d68f9e953b3208860152",
"assets/assets/icons/doctor_icon.png": "b3cdb5414c05d164a0aa92296c70369b",
"assets/assets/icons/download.svg": "072332645d6e1978317c63b2a09cc953",
"assets/assets/icons/down_button.svg": "83cfd2d5bb4b10b54154e89cc04f155d",
"assets/assets/icons/edit%2520profile.svg": "c8626776dc349b47e5c7ae29cfa5a600",
"assets/assets/icons/edit.svg": "8290f15cc9352e0dc87a8272559ce97c",
"assets/assets/icons/Ellipse%2520194.svg": "fd4f15728befec556b0313df429db0bc",
"assets/assets/icons/empty_address.svg": "3f798ffc9740972d4b82384a142b31d5",
"assets/assets/icons/empty_cart.svg": "e8406a1fd9e1da992d2c9ad929f005f0",
"assets/assets/icons/empty_order.svg": "9b59ab57a90be76b4c4b4c9f596237f9",
"assets/assets/icons/empty_wish.svg": "1e9c2b803ac076882e42d4d7f3963f9c",
"assets/assets/icons/error.svg": "de315a3e7e446509e7de4bf9aaa0767d",
"assets/assets/icons/error_rounded.svg": "3540349ac1b250301a85b6ca1eef91e3",
"assets/assets/icons/facebook.svg": "6292aeccbede66d5a893ca45804e3e1c",
"assets/assets/icons/favorite.svg": "14d5f919f75a8080bc2dbe6afdd7ca04",
"assets/assets/icons/female.svg": "5cdeac796ab4c944bbbeeef150e7e32a",
"assets/assets/icons/fill_round_check.svg": "55bad376a996eafe36f41448e2234b2d",
"assets/assets/icons/filter.svg": "13b7fabe26517fc5bfefefdb595f54cd",
"assets/assets/icons/firmware.svg": "9b9ae8a4a1830987f20545fd8b4b2dde",
"assets/assets/icons/flag.png": "61c6ab2057bbfb66172ab1477880d091",
"assets/assets/icons/forward_icon.svg": "149b95d990f5c6aa3145f2fc15ac6c2c",
"assets/assets/icons/google.svg": "1651d8b87f0961b52b759a8169341659",
"assets/assets/icons/help.svg": "4a6a1c56d87f32926d2fdd18628d4fd5",
"assets/assets/icons/history_icon.svg": "27530df8324bcceab9cf48d7d3ee2dd4",
"assets/assets/icons/home.svg": "120c8f8046341fbfb30b505cc68d4518",
"assets/assets/icons/ideas.svg": "d506898575f3cdc9847b2bcd669f6d95",
"assets/assets/icons/insta.svg": "228880020192255f7640d285bc9e2f91",
"assets/assets/icons/Lab%2520test.svg": "6f2b1738025e4a0b37ac7eaf14b5c2ee",
"assets/assets/icons/lab_profile.svg": "245ea7946278d35e79ea89b57923121d",
"assets/assets/icons/likeRed.svg": "1791c1cf0da0c7c08fc1e578447a8d63",
"assets/assets/icons/linkedin.svg": "267ba494abec1111527f038b2ff8d898",
"assets/assets/icons/locatePharm.svg": "c87394bdf53f3fb9239962d5222d52dd",
"assets/assets/icons/location.svg": "2bdd39fc2c19a4f3818ddb09727de852",
"assets/assets/icons/locIcon.png": "2e12baea6d865bfd46f541d00a2bf894",
"assets/assets/icons/Logo.svg": "0a2e4bdc86fdb387b42170a3b1c3d532",
"assets/assets/icons/logout.svg": "c159e74a12df16cabef07097736f38e6",
"assets/assets/icons/mail.svg": "7175c486c60bd9fd1dcbca9300157138",
"assets/assets/icons/male.svg": "6859e8f6116c513fa460b47dfa23257e",
"assets/assets/icons/maskad.png": "d52c0b15ed6e5edf724a637ddeb337fe",
"assets/assets/icons/med.png": "f1a58e7c747c7f16120e9ac134ea7874",
"assets/assets/icons/medoLogo.svg": "907bc64ea7b1766fa74f4a0830e38c05",
"assets/assets/icons/minus.svg": "03d25ecb66ed78f890d23e8e265539e7",
"assets/assets/icons/more.svg": "66a7bce5de443e0c0d01ba0c62959b99",
"assets/assets/icons/my%2520adress.svg": "81899de92371528d2453109baf6d8d6a",
"assets/assets/icons/my%2520consultation.svg": "1b8d0cc550a3723f2dea8c6484199e87",
"assets/assets/icons/my%2520order.svg": "8b5140e9fda7951dbc4a6f6b1edea065",
"assets/assets/icons/my_consultations.svg": "2ca0f9c5829bfeeb2e699d6e905af7de",
"assets/assets/icons/notifications.svg": "43e65c2655dc2806d81383a5faf6d095",
"assets/assets/icons/notification_read.svg": "b675ce27eb04803d52e23eb0c6964763",
"assets/assets/icons/notification_unread.svg": "016f339d20bf27363534835c686e5d1f",
"assets/assets/icons/oferpic.png": "e10429f4c9059005051ff7b7fa5ea338",
"assets/assets/icons/Pharmacy.svg": "653cde9c3d1e53c907b379b13d9bd19f",
"assets/assets/icons/pharmacyImg.png": "505966b1d40013098f5b20872e37f4cd",
"assets/assets/icons/plus.svg": "76a0b8daffe59e042d09b9d103c072e4",
"assets/assets/icons/prd.png": "e23eca42189b692d9512846263bb0e6a",
"assets/assets/icons/profile_favorite.svg": "37a2c622de70fb0689be799042fe97dc",
"assets/assets/icons/remove.svg": "ffeb5d566c79ea95c97a5d49d4e2e025",
"assets/assets/icons/return.svg": "cbcc03a98428f9272dc79ba0b1919b32",
"assets/assets/icons/robotic.svg": "de057bbf3c0adbac148cfc68cb2bf82e",
"assets/assets/icons/round_check.svg": "3f17af9159493b92f00c2f9e11d7d051",
"assets/assets/icons/saved_address.svg": "02b8d449bd7eaaf2418c5446672d4595",
"assets/assets/icons/schedule.svg": "deac633dd25a5d94229c1b6f4d8858e7",
"assets/assets/icons/search-.svg": "73de10f7e1c7097d33c4b2ca098e9e01",
"assets/assets/icons/search.svg": "b3b5b42981f4130dea8a366e4b45aea0",
"assets/assets/icons/search_not_found.svg": "5b19a913f4125373904c5583fc9f0228",
"assets/assets/icons/secure.svg": "13a20e60d928740200cf078f12bf8952",
"assets/assets/icons/selected_address.svg": "380fe362c9fd3c23d723731b8fda9f5b",
"assets/assets/icons/selected_check.svg": "f726add0b5c60bac50df2b76c65e1bea",
"assets/assets/icons/share.svg": "c19558a87922eb5a894973a2ff753c66",
"assets/assets/icons/shop.svg": "bed0a398903ea33869ce4d76620c2aed",
"assets/assets/icons/shopping_cart.svg": "4ae297d6ad76b3020cad06c90d98795a",
"assets/assets/icons/sliderpic.png": "f9b7c6f71824bbe8223a35602c87d3ce",
"assets/assets/icons/slider_circle.svg": "acfa760908c256b1c97430c3c49fd7d6",
"assets/assets/icons/slider_unselected.svg": "76b90a2b8cf2a080ac331866810b942d",
"assets/assets/icons/slider_video.svg": "50a54ecff971a326c38ca1c4c8b53635",
"assets/assets/icons/slider_video_unselected.svg": "c4e3e173e9065e095b760b917bfcc684",
"assets/assets/icons/smartphone.svg": "616633010b1ebd0747f58010871915eb",
"assets/assets/icons/something_went_wrong.svg": "fd4f15728befec556b0313df429db0bc",
"assets/assets/icons/sort.svg": "025e0a283e6f6779a239badbe8dc6f2d",
"assets/assets/icons/splash.png": "384a770864d8e52f33262073c7ae445e",
"assets/assets/icons/star.svg": "b8e4d0eaf7d598746cc99477ccf02846",
"assets/assets/icons/star_selected.svg": "1883b21cd573f001c503d22a0810e9b7",
"assets/assets/icons/star_unselected.svg": "83e7acc4533521514ed793d16722e1e7",
"assets/assets/icons/steper-done.svg": "88a03c6d92c23e6963bf02343bb7e09d",
"assets/assets/icons/subCategory.png": "0fd5756c2c212c5b197af02c2a18b65f",
"assets/assets/icons/thumb_down.svg": "51a929a3c339a8a11a20482805e3a4c4",
"assets/assets/icons/thumb_down_selected.svg": "3487fc8dbb6827e917cf5d86e0d6bfda",
"assets/assets/icons/thumb_up.svg": "5b6380436b1e15e3920601e87cf003f7",
"assets/assets/icons/thumb_up_selected.svg": "527c4bf5b4b95d8534a0dd4c468b3f67",
"assets/assets/icons/undefault.svg": "5ad295f1f37b6fa3a59d924b591f030d",
"assets/assets/icons/unlike.svg": "90535d51bbc5009c5be30f362059a9c1",
"assets/assets/icons/unselected_address.svg": "0118a0bbe5e535f3ec4cfb6a87e9a37b",
"assets/assets/icons/unSelected_check.svg": "d7c2de9f9f209d2d994f9150bf0db4dc",
"assets/assets/icons/unselect_category.svg": "002d2f4e277d75c7da10030a8861e8e0",
"assets/assets/icons/unselect_home.svg": "ab3c48b8505d956493f067c9d8d134ca",
"assets/assets/icons/unselect_lab_profile.svg": "3022cc9ab5376169c96da040d8dba386",
"assets/assets/icons/unselect_user.svg": "8ebd333ba266ce2184793e3c0bdf837e",
"assets/assets/icons/up_button.svg": "6948bbed7e4f810606a5de32c5d43625",
"assets/assets/icons/user.svg": "7bc6fb2f3707a9d3a8da3ccc50b2b17b",
"assets/assets/icons/Vector.svg": "187b5d6fec6296ee5e37b48c8742bd7a",
"assets/assets/icons/viewCount.svg": "e453224d9150792e18e25f70d056fa4b",
"assets/assets/icons/whatsapp.svg": "aeb59bb3ef1609bec56fb8c9dc882901",
"assets/assets/images/alan.jpeg": "d19e38cb2b5c04854e6f08f5c28b5391",
"assets/assets/images/alan.jpg": "395ac0631acbb7fe985e8429f261e2ba",
"assets/assets/images/alan.png": "95d6e20e5071f7fde7ac2f3c7def33e7",
"assets/assets/images/albert.jpg": "7498db5a16298436720a8beacf88c27f",
"assets/assets/images/ali.jpg": "3f7b61d55f8ea137d65676e32ca1b2c9",
"assets/assets/images/ali_group.jpg": "52c2643b9dea77401ea54a5628096739",
"assets/assets/images/anu.png": "215f5ef03657e139f3e3a3f4a5391497",
"assets/assets/images/anurag.jpg": "af729e85f1a450d45fd00d936ced166e",
"assets/assets/images/aromal.jpg": "2a24886101b70221113733ba929f4a89",
"assets/assets/images/banner.gif": "7d368d30263eeba4d51bc99c83e308e1",
"assets/assets/images/banner_video.gif": "b1afda80303ea64136702cac01d8aa21",
"assets/assets/images/bhavan.jpg": "84607cf69524033a8d46ee036546d067",
"assets/assets/images/branding.jpg": "c233f8427a5d090b538aa0f1f3a554be",
"assets/assets/images/case_banner.jpg": "663175783cbcc7be57a74dcecd35d31c",
"assets/assets/images/catalyst_banner.jpg": "84926cd02e1b76e4c19c8417b70a94c5",
"assets/assets/images/dana.jpeg": "31694946686ce5685b6fa70ec14a0529",
"assets/assets/images/danielberg.jpg": "97963fc42c87f598b22966993ee9424f",
"assets/assets/images/delenut.png": "cfc687239c392c8648316f05f730f007",
"assets/assets/images/design.jpg": "2ae3068929773df8b49e7e65aaac76be",
"assets/assets/images/digital.jpg": "4b1ea248f81341aee1d5f7227eeb9cac",
"assets/assets/images/digital_security.jpg": "e37afa863e9ada44969720e70ac89b23",
"assets/assets/images/directors.jpg": "50b1c2ae86e5a0c554c1c4a910cb9716",
"assets/assets/images/dreality.jpg": "e0750d2d857277feaad48b5b1868b6ed",
"assets/assets/images/dreality_banner.jpg": "97b795af5f2ae243daae48ce70080044",
"assets/assets/images/firmware.jpg": "5b5c160f17b64d8230975a41e86a2add",
"assets/assets/images/gokul.jpg": "cc5fe72ef74c0aebd92e3a79fd64b724",
"assets/assets/images/group.jpg": "a751c54567eaf5f180956e84814d07a2",
"assets/assets/images/hebin.jpg": "014d8b06bc1eeae780e8efaf4787a446",
"assets/assets/images/hebi_group.jpg": "b638a0f5c4ff9d4929b1acf55ea9ebc7",
"assets/assets/images/ideas.jpg": "eeffccfb319f5f026df931e772cd628c",
"assets/assets/images/IMG.png": "6ead71779959e75649cced2be199f150",
"assets/assets/images/innodots%2520catalyst%25201.jpg": "7f058a10a6da30e849d101dcc871e18a",
"assets/assets/images/innodots%2520catalyst%25202.jpg": "d2788c141fded98465a0251c16b1ce29",
"assets/assets/images/innodots%2520catalyst%25203.jpg": "0147c5b14b5459a12c48f1fae28cb7d4",
"assets/assets/images/innodots%2520catalyst%25204.jpg": "9a684ed662b8919a274733cd63ec465d",
"assets/assets/images/innodots%2520catalyst%25205.jpg": "40f0d57fd1d3c920d08ad91da541672d",
"assets/assets/images/innodots%2520catalyst%25206.jpg": "19c825761d90730ff0b2e875cfc8534c",
"assets/assets/images/innodots%2520catalyst%25207.jpg": "e8b08fe4cd850d270a3e74a97dc5ab3d",
"assets/assets/images/innodots%2520catalyst%25208.jpg": "36fdb3653f96998338a9567a8fb5e076",
"assets/assets/images/innodots%2520dreality%25201.jpg": "9742955f71dd5518bfd9c3cc8eec25c4",
"assets/assets/images/innodots%2520dreality%25202.jpg": "eac182a9c9092f8a87ddd737d9855b72",
"assets/assets/images/innodots%2520dreality%25203.jpg": "233f2bcda2416213ef4c0ae380d803b0",
"assets/assets/images/innodots%2520dreality%25204.jpg": "757426cef3ba16db27ba0a72a9fdf139",
"assets/assets/images/innodots%2520dreality%25205.jpg": "327d74013f7ecaa0c53d95e47df58fe5",
"assets/assets/images/innodots%2520dreality%25206.jpg": "6e1df23004efa19eea41bcacdb71af86",
"assets/assets/images/innodots%2520dreality%25207.jpg": "9b45bf0ae197460a5860461a878f2a1d",
"assets/assets/images/innodots%2520dreality.jpg": "c9d29969e19a9e536e20054758b6f0d9",
"assets/assets/images/Innodots_logo.jpg": "c07437434ef06627147165848736faae",
"assets/assets/images/karthik.jpg": "448efac120a123e1a9636df792d92ff7",
"assets/assets/images/katha.png": "964e29088178f599975e6c5ee7c603c0",
"assets/assets/images/Kimsat.png": "05a02d2c6ba52376df69808649885508",
"assets/assets/images/kimsat1.png": "1443bccb8c3a353288ae968fb2efcf7f",
"assets/assets/images/kimsat_case.jpeg": "9c0e7a38be2a2edf5fe24de83625d9b8",
"assets/assets/images/kimsat_case_study.jpg": "62203cac03f77266de227412e2bd134f",
"assets/assets/images/logo%2520(1).png": "6ead71779959e75649cced2be199f150",
"assets/assets/images/logo.png": "ef3d3af3a03ff6fba7982dbcd4a78a81",
"assets/assets/images/lucky.jpeg": "6db33fd8a4d0dab2bc8a21fa06ae4f79",
"assets/assets/images/mathrubhoomi.png": "baec55700899c7feae55ef23e7947553",
"assets/assets/images/mobile_applications.jpg": "9e2118f91008e45eaa4d32892f0932db",
"assets/assets/images/muktha.png": "96feb77e0ec67a8f379dc8d1c1f22c98",
"assets/assets/images/perfect.jpg": "b02057aeb19bd6257671735946d0098b",
"assets/assets/images/process_automation.jpg": "1974cd6d5ee6be94b2a41921871a966b",
"assets/assets/images/ramli.jpeg": "e4ed6688b2be861ad7ee0948c7c16d83",
"assets/assets/images/reelsmarrow.png": "5843f606337fc44b482cedc42d64e1c8",
"assets/assets/images/robotics.jpg": "0dbd2f94b6c6bfd6ef52c867e7611c76",
"assets/assets/images/romana.png": "7c99f45b4680957e89899208f1a6567a",
"assets/assets/images/romeo.jpg": "728684138cd7b424242b86582e3834ea",
"assets/assets/images/rpa.jpg": "87493b80ef9936639f2086d176d3203a",
"assets/assets/images/seo.jpg": "01ae0239c8756dee8e6baebde584c7d6",
"assets/assets/images/squas.jpg": "3d801a048bec83af8c7c9ed6f55d77d3",
"assets/assets/images/sushith.jpg": "1aba1995626ed6f2695bcc6808b155b2",
"assets/assets/images/team_table.jpg": "4eac1b10a3bb3ef39b81b62662f1ceb3",
"assets/assets/images/totalcare.jpg": "a4a4197749fb009d564343bb8af25a14",
"assets/assets/images/touchq.jpg": "2b7ec05896cd56d726966bfc1f07a5e9",
"assets/assets/images/ui_ux.jpg": "83f6404e42fc3e6beb8f04cd141d6c7d",
"assets/assets/images/valiant.jpg": "fbfb5a0b4f499de507fec55402eab4f7",
"assets/assets/images/wedland.png": "de809e537ad3f1c6cda986350faa0da7",
"assets/FontManifest.json": "7f1bb90f8e750a97469ab5d4b303a712",
"assets/fonts/MaterialIcons-Regular.otf": "8083ef47f3c7cc6f968172960c7fb5b1",
"assets/NOTICES": "e12620074d9fcb7fbc41840aed2d7c39",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "eebbc2af885e564275e3d59048bdc61e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "ef3d3af3a03ff6fba7982dbcd4a78a81",
"index.html": "5f56d4fcc175760f6d06a3ab6b9212c2",
"/": "5f56d4fcc175760f6d06a3ab6b9212c2",
"main.dart.js": "c38a13f6cfe2e9411092dfa4fb40f3cf",
"manifest.json": "519a0a3d271061a7096c741d8839ee1c",
"version.json": "f204b9cfda948fb1bb50ba4fb3c79f6c"};
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
