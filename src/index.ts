function getElement<T extends typeof HTMLElement>(
  query: string,
  TargetElement?: T,
) {
  const ele = document.querySelector(query);
  if (ele instanceof (TargetElement ?? HTMLElement)) {
    return ele as InstanceType<T>;
  }
  throw Error(`Element by "${query}" not exists`);
}

const ratingSection = getElement(`[aria-labelledby="rating-heading"]`);
const toastSection = getElement(`[aria-labelledby="toast-heading"]`);
const figcaption = getElement("figcaption");

const params = new URLSearchParams(window.location.search);
const rating = params.get("rating");

ratingSection.ariaHidden = String(null !== rating);
toastSection.ariaHidden = String(null === rating);
figcaption.textContent = `You selected ${rating} out of 5`;
