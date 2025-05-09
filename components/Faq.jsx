const Faq = () => {
  const faqData = [
    {
      question: "n8n là gì?",
      answer: "n8n là một công cụ tự động hóa quy trình làm việc mã nguồn mở. Công cụ này cho phép Quý khách kết nối các ứng dụng và dịch vụ khác nhau để tự động hóa các tác vụ một cách trực quan thông qua giao diện đồ họa dạng node (nút)."
    },
    {
      question: "VPS tích hợp n8n là gì?",
      answer: "VPS tích hợp n8n là dịch vụ máy chủ ảo riêng (VPS) do InterData cung cấp, đi kèm với một OS Template đã được cài đặt sẵn công cụ n8n. Điều này giúp người dùng có thể bắt đầu sử dụng n8n ngay lập tức mà không cần thực hiện các bước cài đặt thủ công phức tạp."
    },
    {
      question: "Dịch vụ VPS n8n dành cho ai?",
      answer: `Dịch vụ VPS n8n của InterData được thiết kế để phục vụ đa dạng người dùng:
      <br/>– Giải pháp này phù hợp cho các nhà phát triển (Developers) cần một môi trường tùy chỉnh cao để xây dựng và thử nghiệm tự động hóa
      <br/>– Các marketer và chủ doanh nghiệp muốn tự động hóa quy trình làm việc, marketing, bán hàng một cách hiệu quả
      <br/>– Các digital agency đang tìm kiếm một nền tảng mạnh mẽ, ổn định để triển khai dịch vụ tự động hóa cho nhiều khách hàng của mình`
    },
    {
      question: "Cấu hình VPS tối thiểu để chạy n8n là gì?",
      answer: "Cấu hình tối thiểu thường được khuyến nghị cho n8n là khoảng 2 CPU cores, 4GB RAM và 40GB dung lượng lưu trữ SSD. Tuy nhiên, nhu cầu thực tế phụ thuộc vào độ phức tạp và số lượng workflow Quý khách chạy. Các gói VPS của InterData đã được tính toán để phù hợp với nhiều nhu cầu."
    },
    {
      question: "InterData có hỗ trợ cài đặt n8n cho VPS không?",
      answer: "InterData cung cấp OS Template đã cài đặt sẵn n8n, giúp Quý khách bỏ qua bước cài đặt ban đầu. Đối với các tùy chỉnh nâng cao hoặc các vấn đề phát sinh trong quá trình sử dụng n8n, đội ngũ kỹ thuật của InterData hỗ trợ các vấn đề liên quan đến hạ tầng và hoạt động của VPS."
    },
    {
      question: "So sánh VPS n8n vs Cloud n8n?",
      answer: "VPS n8n cung cấp Quý khách toàn quyền kiểm soát máy chủ, tùy chỉnh không giới hạn, và dữ liệu được lưu trữ trên server riêng của Quý khách, giúp tăng cường bảo mật. Chi phí có thể tối ưu hơn khi sử dụng nhiều workflow. n8n Cloud mang tính tiện lợi cao hơn cho người không muốn quản lý hạ tầng server."
    },
    {
      question: "Tôi có thể nâng cấp gói VPS n8n của mình khi cần không?",
      answer: "Có, InterData hỗ trợ khách hàng nâng cấp gói dịch vụ VPS một cách linh hoạt. Khi nhu cầu tự động hóa của Quý khách tăng lên, Quý khách có thể dễ dàng chuyển sang gói có tài nguyên CPU, RAM, dung lượng lưu trữ cao hơn."
    },
    {
      question: "Dữ liệu n8n của tôi có được backup không?",
      answer: "InterData hỗ trợ thực hiện sao lưu (backup) dữ liệu cho VPS khi có yêu cầu cụ thể từ phía khách hàng. Quý khách nên liên hệ với bộ phận hỗ trợ của InterData để thảo luận và đăng ký dịch vụ sao lưu phù hợp với nhu cầu của mình."
    },
    {
      question: "Dịch vụ VPS n8n của InterData sử dụng phần cứng gì?",
      answer: "InterData đầu tư vào hạ tầng phần cứng chuyên dụng thế hệ mới cho dịch vụ VPS n8n. Các máy chủ của chúng tôi sử dụng CPU AMD Epyc hoặc Intel Xeon hiệu năng cao và ổ cứng SSD NVMe U.2 cho tốc độ truy xuất dữ liệu cực nhanh."
    },
    {
      question: "Tốc độ mạng của VPS tích hợp n8n tại InterData như thế nào?",
      answer: "VPS tại InterData được kết nối với cổng mạng (Network port) có tốc độ cao lên 10Gbps tùy theo gói dịch vụ và datacenter. Kết hợp với chính sách băng thông rộng rãi, điều này đáp ứng tốt nhu cầu trao đổi dữ liệu nhanh chóng của các workflow n8n."
    },
    {
      question: "Làm thế nào để yêu cầu backup cho VPS n8n của tôi tại InterData?",
      answer: "Để yêu cầu dịch vụ sao lưu dữ liệu cho VPS n8n, Quý khách vui lòng liên hệ trực tiếp với đội ngũ hỗ trợ khách hàng của InterData qua các kênh liên lạc được cung cấp (hotline, email, ticket). Chúng tôi sẽ tư vấn và thực hiện theo yêu cầu của Quý khách."
    },
    {
      question: "InterData có cung cấp IP riêng cho VPS n8n không?",
      answer: "Mặc định, các dịch vụ VPS tại InterData sử dụng Shared IP (Địa chỉ IP chia sẻ). Tuy nhiên, InterData vẫn hỗ trợ cung cấp Dedicated IP (Địa chỉ IP riêng) nếu quý khách có nhu cầu. Để sử dụng Dedicated IP, vui lòng liên hệ trực tiếp với đội ngũ InterData để được tư vấn và hỗ trợ chi tiết."
    },
    {
      question: "Tôi có thể cài đặt các ứng dụng khác cùng với n8n trên VPS không?",
      answer: "Hoàn toàn có thể. Với quyền quản trị cao nhất (root access) trên VPS, Quý khách có thể cài đặt thêm các phần mềm, ứng dụng khác phục vụ cho công việc của mình, song song với n8n, miễn là các ứng dụng đó tương thích với hệ điều hành và không vượt quá tài nguyên (CPU, RAM, dung lượng) của gói VPS Quý khách đang sử dụng."
    },
    {
      question: "Ưu điểm của việc chọn template OS cài sẵn n8n của InterData là gì?",
      answer: `Việc chọn OS template cài sẵn n8n của InterData mang lại nhiều lợi ích:
      <br/>– Tiết kiệm đáng kể thời gian và công sức cài đặt ban đầu
      <br/>– Giảm thiểu nguy cơ phát sinh lỗi kỹ thuật do cấu hình sai
      <br/>– Giúp Quý khách nhanh chóng có một môi trường n8n ổn định và sẵn sàng để bắt tay vào việc xây dựng các quy trình tự động hóa`
    },
    {
      question: "InterData có các gói VPS n8n nào cho doanh nghiệp lớn không?",
      answer: "Có, InterData cung cấp các giải pháp VPS cấu hình cao và tùy chỉnh theo yêu cầu, có khả năng đáp ứng nhu cầu sử dụng n8n ở quy mô lớn của các doanh nghiệp, bao gồm các yêu cầu về tài nguyên tính toán, lưu trữ, bảo mật và hỗ trợ chuyên biệt. Vui lòng liên hệ trực tiếp với InterData để được tư vấn chi tiết."
    }
  ];
  

  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, midPoint);
  const rightColumn = faqData.slice(midPoint);

  return (
    <div className="x-grid x-grid-cols-2 md:grid-cols-2 x-gap-10">
      {/* Cột bên trái */}
      <div className="accordion accordion-style-two" id="accordionLeft">
        {leftColumn.map((faq, index) => (
          <div className="accordion-item" key={index} style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)'}}>
            <div className="accordion-header" id={`headingLeft${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseLeft${index}`}
                aria-expanded="false"
                aria-controls={`collapseLeft${index}`}
              >
                <h3 className="x-text-lg">{faq.question}</h3>
              </button>
            </div>
            <div
              id={`collapseLeft${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`headingLeft${index}`}
              data-bs-parent="#accordionLeft"
            >
              <div className="accordion-body ">
                <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cột bên phải */}
      <div className="accordion accordion-style-two" id="accordionRight">
        {rightColumn.map((faq, index) => (
          <div className="accordion-item" key={index} style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)'}}>
            <div className="accordion-header" id={`headingRight${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseRight${index}`}
                aria-expanded="false"
                aria-controls={`collapseRight${index}`}
              >
                <h3 className="x-text-lg">{faq.question}</h3>
              </button>
            </div>
            <div
              id={`collapseRight${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`headingRight${index}`}
              data-bs-parent="#accordionRight"
            >
              <div className="accordion-body">
                <p className="x-text-base" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
