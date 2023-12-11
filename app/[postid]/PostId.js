"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import "./postid.css";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { mdilArrowUpCircle } from "@mdi/light-js";
import Link from "next/link";

const PostId = () => {
  const params = useParams();
  const postid = params.postid;
  const router = useRouter();

  // localstorage
  const storedData = JSON.parse(localStorage.getItem("my-app-products"));
  const product = storedData.state.products.find(
    (product) => product.id === postid
  );

  function truncate(str, maxLength = 100) {
    if (str.length <= maxLength) {
      return str;
    } else {
      return [...str].splice(0, maxLength - 3).join("") + "...";
    }
  }

  const message = truncate(product.message);

  const handleClick = () => {
    router.back();
  };



  return (
    <div className="page-postid">
      <div className="top" onClick={() => handleClick()}>
        <Icon path={mdiClose} size={2} />
      </div>
      <div>
        <picture>
          <Image
            src={product.full_picture}
            alt={message}
            width={1400}
            height={1400}
            loading={product.isAboveTheFold ? "eager" : "lazy"}
            quality={100}
          />
        </picture>

        <article>
          <h1>{message}</h1>
          <p>{product.reactions.summary.total_count} likes</p>
        </article>
        <div className="link">
          <Link href={product.permalink_url} target="_blank">
            <Icon path={mdilArrowUpCircle} size={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostId;
