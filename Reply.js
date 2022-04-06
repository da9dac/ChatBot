function getBotResponse(input) {
    //간단한 응답
    if (input == "안녕") {
        console.log("만나서 반가워요");
        return "만나서 반가워요!";
    } 
    else if (input == "잘 있어") {
        console.log("즐거웠어요. 다음에 만나요!");
        return "즐거웠어요. 다음에 만나요!";
    } 

    else if (input == "날씨") {
        console.log("요즘 너무 덥죠?");
        return "요즘 너무 덥죠?";
    }

    // 개강, 종강
    else if (input == "개강") {
        console.log("2월28일");
        return "2월28일입니다.";  
    }
    else if (input == "종강") {
        console.log("6월20일");
        return "6월20일입니다.";  
    }

    // 등록금
    else if (input == "등록금납부일") {
        console.log("2월21일 ~ 2월25일");
        return "2월21일 오전10:00 ~ 2월25일 오후16:00까지 입니다. 우리은행 0000-00-000000 입니다.";  
    }

    // 등록금분납



    // 셔틀버스
    else if (input == "셔틀버스") {
        console.log("셔틀버스는 코로나로 인해 운행이 중단되었습니다.");
        return "셔틀버스는 코로나로 인해 운행이 중단되었습니다.";  
    }

    // 학사일정 고치기
    else if (input == "학사일정") {
        console.log("학사일정");
        return "학사일정";  
    }

    else {
        console.log("잘 이해하지 못했어요. 다른 이야기를 해볼까요?");
        return "잘 이해하지 못했어요. 다른 이야기를 해볼까요?";
    }
}