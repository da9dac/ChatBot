function getBotResponse(input) {
	
    if (input == "!명령어") {
        console.log("명령어 출력");
        return "졸업요건, 교육과정, (교수/학과명)연락처, 장학일정, 종강";
    } 
	
    else if (input == "졸업요건") {
        console.log("졸업요건 출력");
        return "2017년도 소프트웨어학과 졸업요건은 교필 28, 교선 8, 전공 69, 일선 25, 합계 130학점 이수입니다. ";
    } 

    else if (input == "홍길동연락처") {
        console.log("교수 연락처 출력");
        return "010-1234-5678";
    }
	
	else if (input == "소프트웨어학과연락처") {
        console.log("학과 연락처 출력");
        return "123-4567";
    }

    else if (input == "교육과정") {
        console.log("교육과정 출력");
        return "준비중입니다.";  
    }
	
	else if (input == "장학일정") {
        console.log("장학일정 출력");
        return "준비중입니다.";  
    }
	
    else if (input == "종강") {
        console.log("6월20일");
        return "6월20일입니다.";  
    }
	
	else {
        console.log("잘 이해하지 못했어요. 질문을 확인해주세요");
        return "잘 이해하지 못했어요. 질문을 확인해주세요";
    }
	
}
